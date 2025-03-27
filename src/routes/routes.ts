import { Hono } from "hono";
import { authenticationRoutes } from "./authentication-routes.ts";
import { usersRoutes } from "./users-routes.ts";
import { postsRoutes } from "./posts-routes.ts";
import { likesRoutes } from "./likes-routes.ts";
import { commentsRoutes } from "./comments-routes.ts";

export const allRoutes = new Hono();

allRoutes.route("/auth", authenticationRoutes);
allRoutes.route("/users", usersRoutes);
allRoutes.route("/posts", postsRoutes);
allRoutes.route("/likes", likesRoutes);
allRoutes.route("/comments", commentsRoutes);