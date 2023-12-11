'use client';
import { PostData, PostCover } from '../posts/post';

export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData;
};

export const getAllTitlesPosts = async (): Promise<PostData[]> => {
  const url = 'https://blog-strapi-app-5q43.onrender.com/api/posts?populate=*';
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};

export const getAllUploads = async (): Promise<PostCover[]> => {
  const url = 'https://blog-strapi-app-5q43.onrender.com/api/upload/files';
  const cover = await fetchJson<PostCover[]>(url);
  return cover;
};
