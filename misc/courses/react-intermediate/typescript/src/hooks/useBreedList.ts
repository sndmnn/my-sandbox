import { useState, useEffect } from 'react';
import { Animal, BreedListApiResponse } from '../types/ApiResponsesTypes';

const localCache: {
  [key: string]: string[];
} = {};

type Status = 'unloaded' | 'loading' | 'loaded';

export default function useBreedList(animal: Animal) {
  const [breeds, setBreeds] = useState([] as string[]);
  const [status, setStatus] = useState('unloaded' as Status);

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else if (localCache[animal]) {
      setBreeds(localCache[animal]);
      setStatus('loaded');
    } else {
      setBreeds([]);
      setStatus('loading');

      void (async () => {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = (await res.json()) as BreedListApiResponse;

        localCache[animal] = json.breeds || [];
        setBreeds(localCache[animal]);

        setStatus('loaded');
      })();
    }
  }, [animal]);

  return {
    breeds,
    status,
  };
}
