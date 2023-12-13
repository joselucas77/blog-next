'use client';
import { POSTS_URL } from '../config/app-config';
import { PostData } from '../posts/post';
import { fetchJson } from './fetchJson';

export const getPost = async (id: number | number[]): Promise<PostData[]> => {
  const idNumber = Array.isArray(id) ? id[0] : id;
  const url = `${POSTS_URL}&filters[id][$eq]=${idNumber}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
