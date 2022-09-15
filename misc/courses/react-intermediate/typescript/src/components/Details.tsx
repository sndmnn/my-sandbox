import { Component } from 'react';
import { useParams } from 'react-router-dom';

import ThemeContext from '../contexts/ThemeContext.js';
import { Animal, PetApiResponse } from '../types/ApiResponsesTypes.js';

import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoudary';
import Modal from './Modal.jsx';

interface ComponentProps {
  params: {
    id?: string;
  };
}

class Details extends Component<ComponentProps> {
  state = {
    loading: true,
    showModal: false,
    animal: '' as Animal,
    breed: '',
    city: '',
    state: '',
    description: '',
    name: '',
    images: [] as string[],
  };

  async componentDidMount() {
    if (!this.props.params.id) return;

    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = (await res.json()) as PetApiResponse;
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {(contextValue) => {
              const { color } = contextValue;

              return (
                <button
                  style={{ backgroundColor: color }}
                  onClick={this.toggleModal}
                >
                  Adopt {name}
                </button>
              );
            }}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal && (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams<{ id: string }>();

  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
