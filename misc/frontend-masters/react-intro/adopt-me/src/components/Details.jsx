import { Component } from 'react';
import { useParams } from 'react-router-dom';

import ThemeContext from '../contexts/ThemeContext.js';

import Carousel from './Carousel.jsx';
import ErrorBoundary from './ErrorBoudary.jsx';

class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //   };
  // }

  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {(contextValue) => {
              const [color] = contextValue;

              return (
                <button style={{ backgroundColor: color }}>Adopt {name}</button>
              );
            }}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// const WrappedDetails = () => {
//   const params = useParams();

//   return <Details params={params} />;
// };

// This way it's possible to receive other properties and pass
// them down to <Details />
const WrappedDetails = (props) => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <Details params={params} {...props} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
