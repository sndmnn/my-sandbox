import React from 'react';
import { useTransition } from 'react-spring';
import ToastMessage from '../../models/Toast';
import Toast from './Toast';

import { Container } from './ToastStack.styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastStack: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithtransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithtransitions(
        (style, item) =>
          item && <Toast style={style} message={item} timeOut={4000} />,
      )}
    </Container>
  );
};

export default ToastStack;
