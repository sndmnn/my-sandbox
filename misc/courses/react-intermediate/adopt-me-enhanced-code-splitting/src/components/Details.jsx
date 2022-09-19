/* eslint-disable no-unused-vars */
import { Component, lazy } from 'react';
import { useParams } from 'react-router-dom';

/* Moment is a fairly large library, so we're going to observe a significant
 * change in our "Details.js" bundle size (from 40kB to 193kB as of this writing).
 *
 * That is because our bundler is smart enough to group `moment` and `Details`,
 * causing the `moment` library to be loaded only when the `Details` component
 * is loaded.
 *
 * This is a good example of how code splitting can help you reduce the size of
 * your bundles.
 *
 * OBS: If we were to use another bundler, like Webpack, we'd have to manually
 * set up code splitting configurations to achieve the same result. Whereas Parcel
 * does it automatically.
 */
import * as moment from 'moment';

import ThemeContext from '../contexts/ThemeContext.js';

import Carousel from './Carousel.jsx';
import ErrorBoundary from './ErrorBoudary.jsx';

// This is not a good use case for code splitting, do not do this.
const Modal = lazy(() => import('./Modal.jsx'));

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () =>
    this.setState((prevState) => ({ showModal: !prevState.showModal }));

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
              const [color] = contextValue;

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
            /* We don't need to call Suspense here because we already did it in
             * a parent component. But if we wanted to have a different fallback
             * for this component, we could wrap it in a Suspense component.
             *
             * Adding another Suspense component here would cause modal to be loaded
             * after the outer Suspense component is loaded (Suspense calls are sort of
             * sequential, from the outermost component to the innermost component).
             */
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
