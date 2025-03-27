import "dotenv/config"
import { serve } from "@hono/node-server";
import { allRoutes } from "/Users/dhruv/Desktop/developer/hackernews-server/src/routes/routes.ts";


serve(allRoutes);

console.log("server is running at http://localhost:3000/")