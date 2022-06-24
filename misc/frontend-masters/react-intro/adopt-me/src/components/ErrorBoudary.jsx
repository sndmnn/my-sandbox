import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  static getDerivedState() {
    return { hasError: true };
  }

  // https://reactjs.org/docs/react-component.html#componentdidcatch
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError)
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to back to the home page or wait five seconds.
        </h2>
      );

    return this.props.children;
  }
}
