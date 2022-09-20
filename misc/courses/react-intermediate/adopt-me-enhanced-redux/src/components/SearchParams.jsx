import { useState, useEffect } from 'react';
import useBreedList from '../hooks/useBreedList.js';
import Results from './Results.jsx';
import { useSelector, useDispatch } from 'react-redux';
import changeAnimal from '../redux/action-creators/changeAnimal';
import changeBreed from '../redux/action-creators/changeBreed';
import changeTheme from '../redux/action-creators/changeTheme';
import changeLocation from '../redux/action-creators/changeLocation';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  /**
   * `state` is the entire state object from the Redux store. `useSelector` receives
   * a function that has the `state` object passed to it as an argument and returns
   * the part of that state that you're concerned about.
   *
   * It's important to point out that each key in the state object is assigned according
   * to the names we gave at the `combineReducers` call in `redux/reducers/index.js`.
   */
  const animal = useSelector((state) => state.animal);
  const location = useSelector((state) => state.location);
  const breed = useSelector(({ breed }) => breed);
  const themeColor = useSelector(({ theme }) => theme.color);
  const dispatch = useDispatch();

  /**
   * This is a bad idea, because Redux is going to use the function `useSelector`
   * receives as the subscription function to "bind" your component to the changes
   * in the Redux store.
   *
   * Writing it this way will cause `SearchParams` to re-render every time anything
   * in the Redux store changes, which is generally not what you want.
   */
  // const state = useSelector((state) => state);

  const [pets, setPets] = useState([]);
  const { breeds } = useBreedList(animal);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const jsonRes = await res.json();
    setPets(jsonRes.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              dispatch(changeAnimal(e.target.value));
            }}
            onBlur={(e) => {
              dispatch(changeAnimal(e.target.value));
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
              dispatch(changeBreed(e.target.value));
            }}
            onBlur={(e) => {
              dispatch(changeBreed(e.target.value));
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
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
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
