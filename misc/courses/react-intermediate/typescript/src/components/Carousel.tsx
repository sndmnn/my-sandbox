import { Component, MouseEvent } from 'react';

interface Props {
  images: string[];
}

export default class Carousel extends Component<Props> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;

    if (event.target.dataset.index) {
      // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
      this.setState({
        active: Number.parseInt(event.target.dataset.index),
      });
    }
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
              // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
              data-index={index}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
