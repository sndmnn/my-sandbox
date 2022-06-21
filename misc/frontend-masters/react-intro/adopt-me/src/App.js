const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  /*
   * The implicit contract of a React function component it that it
   * must return a product of `React.createElement`.
   *
   * It is also important to note that React re-renders the component
   * A LOT, so these function components must run fast. In functional
   * linguo: they must be pure (not have side effects).
   */
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'Cat',
      breed: 'Mix',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
