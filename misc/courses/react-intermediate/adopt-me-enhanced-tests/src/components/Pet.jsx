// import React from 'react';
import { Link } from 'react-router-dom';

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (Array.isArray(images) && images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} data-testid="thumbnail" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

// const Pet = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h2>{props.breed}</h2>
//     </div>
//   );
// };

// const Pet = (props) => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, props.name),
//     React.createElement('h2', {}, props.animal),
//     React.createElement('h2', {}, props.breed),
//   ]);
// };

export default Pet;
