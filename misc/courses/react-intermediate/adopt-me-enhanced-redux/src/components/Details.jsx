import { Component } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from './Carousel.jsx';
import ErrorBoundary from './ErrorBoudary.jsx';
import Modal from './Modal.jsx';

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

          <button
            style={{ backgroundColor: this.props.theme.color }}
            onClick={this.toggleModal}
          >
            Adopt {name}
          </button>

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

/**
 * You could just use `useSelector` inside `WrappedDetails` and pass in `theme`
 * as a prop to `Details`, but this is an example of the old way of doing Redux
 * things.
 */
const mapStateToProps = ({ theme }) => ({ theme });
const ReduxWrappedDetails = connect(mapStateToProps)(Details);

const WrappedDetails = (props) => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <ReduxWrappedDetails params={params} {...props} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
