import { useState } from 'react';

export const fetchDataWithDelay = <T>(data: T, delayRange: [number, number]): Promise<T> => {
  const [minDelay, maxDelay] = delayRange;
  const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, randomDelay);
  });
};

export const useRandomDelayDataFetch = <T>(initialData: T, delayRange: [number, number]) => {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchDataWithDelay(initialData, delayRange);

      setData(result);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
