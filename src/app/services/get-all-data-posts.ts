'use client';
import { POSTS_URL } from '../config/app-config';
import { PostData } from '../posts/post';
import { fetchJson } from './fetchJson';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
