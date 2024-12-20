import { Hono } from "hono";
import {userRoutes} from "./routes/user";
import {blogRoutes} from "./routes/blog";
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>(); // it is defining that databse url is string type and if we cannot do so , it will give us typescript error

app.use('/*', cors())
app.route("/api/v1/user" , userRoutes);
app.route("api/v1/blog" , blogRoutes);


app.get("/", (c) => {
  return c.text("Hello Hono!");
});

//yeh maine apne tarike sei kara hai



export default app;
