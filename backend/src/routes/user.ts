import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge"; //yeh mandetory hai prisma client banane ke luye
import { withAccelerate } from "@prisma/extension-accelerate"; //same for it
import { decode, sign, verify } from "hono/jwt";
import { singupInput, signinInput } from "@tanishqdev/medium-common";

export const userRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRoutes.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate()); //it is reqquired to communicate with the db

  const body = await c.req.json();
  const { success } = singupInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      message: "Error signingup",
    });
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    jwt: token,
  });
});

userRoutes.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      message: "Error signing in",
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.text("Invalid credentials");
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    c.status(200);
    return c.text(jwt);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.text("Internal server error");
  }
});
