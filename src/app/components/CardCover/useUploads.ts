// useUploads.ts
import { useEffect, useState } from 'react';
import { getAllUploads } from '@/app/services/get-all-data-posts';

export const useUploads = () => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUploads();
        setUploads(result);
      } catch (error) {
        // Handle errors
        console.error('Error fetching uploads:', error);
      }
    };

    fetchData();
  }, []);

  return uploads;
};
