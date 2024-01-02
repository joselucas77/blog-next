'use client';
import { POST_URL } from '../config/app-config';
import { PostData } from '../posts/post';
import { fetchJson } from './fetchJson';

export const getPost = async (id: number | number[]): Promise<PostData> => {
  const idNumber = Array.isArray(id) ? id[0] : id;
  const url = `${POST_URL}/${idNumber}?populate=*`;
  const posts = await fetchJson<PostData>(url);
  return posts;
};
