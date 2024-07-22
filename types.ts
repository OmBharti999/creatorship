import type { Post } from "@prisma/client";

export interface PostWithEmail extends Post {
  author: { email: string };
}

export interface PostWithEmailArray {
  posts: PostWithEmail[];
}
