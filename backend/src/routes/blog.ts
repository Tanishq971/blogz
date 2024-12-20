import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge"; //yeh mandetory hai prisma client banane ke luye
import { withAccelerate } from "@prisma/extension-accelerate"; //same for it
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@tanishqdev/medium-common";

export const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRoutes.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";
  const token = authHeader.replace("Bearer", "").trim();

  try {
    const user = await verify(token, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id as string); //chat gpt gave this..and i have wriiten this c.set("userId",user.id)//now we have to explicitly tell that we
      await next();
    } else {
      c.status(401);
      return c.json({
        error: "unauthorized",
      });
    }
  } catch (err) {
    c.status(401);
    return c.json({
      error: "unauthorized",
    });
  }
}); //middleware

blogRoutes.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const author = (c.get("userId") as string) || "";

  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  console.log(success);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid input",
    });
  }

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: author,
    },
  });

  return c.json({
    id: blog.id,
  });
});

blogRoutes.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid input",
    });
  }

  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: blog.id,
  });
});

//pagination HW(ADD pagination here...)
blogRoutes.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const all = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!all) {
    c.status(404);
    return c.text("Not found any post");
  }
  return c.json({
    all,
  });
});

blogRoutes.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.post.findFirst({
      where: {
          id: id,
      },
      select: {
          id: true,
          title: true,
          content: true,
          author: {
              select: {
                  name: true, // Fetch author's name
              },
          },
      },
  });
  

    return c.json({
      blog,
    });
  } catch (err) {
    c.status(404);
    return c.text("Not found blog with this id");
  }
});
