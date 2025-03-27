import { prismaClient } from "/Users/dhruv/Desktop/developer/hackernews-server/src/extras/prisma.ts";
import type { getPostsResult } from "/Users/dhruv/Desktop/developer/hackernews-server/src/controllers/posts/posts-types.ts";

export const getMePosts = async (parameters: {
  userId: string;
}): Promise<getPostsResult> => {
  const posts = await prismaClient.post.findMany({
    where: {
      id: parameters.userId,
    },
  });

  return {
    posts,
  };
};

export const getAllPosts = async (): Promise<getPostsResult> => {
  const posts = await prismaClient.post.findMany();

  return {
    posts,
  };
};