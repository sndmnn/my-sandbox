import { useState, useEffect } from 'react';

const localCache = {};

export default function useBreedList(animal) {
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else if (localCache[animal]) {
      setBreeds(localCache[animal]);
      setStatus('loaded');
    } else {
      setBreeds([]);
      setStatus('loading');

      (async () => {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = await res.json();

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
