import { useState, useEffect, FunctionComponent } from 'react';
import useBreedList from '../hooks/useBreedList';
import Results from './Results';
import useTheme from '../hooks/useTheme';
import { Animal, Pet, PetApiResponse } from '../types/ApiResponsesTypes';

const ANIMALS: Animal[] = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams: FunctionComponent = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('' as Animal);
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([] as Pet[]);
  const { breeds } = useBreedList(animal);
  const { color: themeColor, setColor: setThemeColor } = useTheme();

  useEffect(() => {
    void requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const jsonRes = (await res.json()) as PetApiResponse;
    setPets(jsonRes.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value as Animal);
              setBreed('');
            }}
            onBlur={(e) => {
              setAnimal(e.target.value as Animal);
              setBreed('');
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((_breed) => (
              <option key={_breed} value={_breed}>
                {_breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
            onBlur={(e) => setThemeColor(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: themeColor }}>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
