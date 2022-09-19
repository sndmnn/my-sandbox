/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import useBreedList from '../useBreedList';

// function getBreedList(animal) {
//   let list;

//   function TestComponent() {
//     list = useBreedList(animal);

//     /* Null is a valid React.ReactNode, and therefore `TestComponent` is a valid
//      * React component.
//      */
//     return null;
//   }

//   render(<TestComponent />);
//   return list;
// }

test('it should return an empty list when no animal is provided', async () => {
  // const { breeds, status } = getBreedList();
  const { result } = renderHook(() => useBreedList());
  const { breeds, status } = result.current;

  expect(breeds).toHaveLength(0);
  expect(status).toBe('unloaded');
});

test('it should return a list of breeds when an animal is provided', async () => {
  const breeds = [
    'Havanese',
    'Bichon Frise',
    'Maltese',
    'Poodle',
    'Golden Retriever',
    'Labrador',
    'Husky',
  ];

  fetch.mockResponseOnce(
    JSON.stringify({
      animal: 'dog',
      breeds,
    })
  );

  const { result, waitForNextUpdate } = renderHook(() => useBreedList('dog'));
  await waitForNextUpdate();

  const { breeds: breedList, status } = result.current;

  expect(status).toBe('loaded');
  expect(breedList).toEqual(breeds);
});
