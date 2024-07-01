import React from 'react';

export default function useMenu() {
  const [shouldShow, setShouldShow] = React.useState(false);

  const open = () => {
    setShouldShow(true);
  };

  const close = () => {
    setShouldShow(false);
  };

  const toggle = () => {
    setShouldShow((prevShouldShow) => !prevShouldShow);
  };

  return {
    shouldShow,
    open,
    close,
    toggle,
  };
}
