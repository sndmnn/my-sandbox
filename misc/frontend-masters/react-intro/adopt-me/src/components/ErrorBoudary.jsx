import { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // https://reactjs.org/docs/react-component.html#componentdidcatch
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError)
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to back to the home page or wait five seconds.
        </h2>
      );

    return this.props.children;
  }
}
