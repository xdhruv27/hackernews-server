import { Hono } from "hono";
import { swaggerUI } from "@hono/swagger-ui";

import { authenticationRoutes } from "./authentication-routes.js";
import { usersRoutes } from "./users-routes.js";
import { postsRoutes } from "./posts-routes.js";
import { likesRoutes } from "./likes-routes.js";
import { commentsRoutes } from "./comments-routes.js";

import { cors } from "hono/cors";
import { authRoute } from "./middlewares/session-middleware.js";

export const allRoutes = new Hono();

allRoutes.use(
  cors({
    origin: ["https://hackernews-www-54.vercel.app"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowHeaders: ["Content-Type", "Authorization", "token"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  })
);

allRoutes.get("/ui", swaggerUI({ url: "/docs" }));

allRoutes.route("/api/auth", authRoute);
allRoutes.route("/auth", authenticationRoutes);
allRoutes.route("/users", usersRoutes);
allRoutes.route("/posts", postsRoutes);
allRoutes.route("/likes", likesRoutes);
allRoutes.route("/comments", commentsRoutes);