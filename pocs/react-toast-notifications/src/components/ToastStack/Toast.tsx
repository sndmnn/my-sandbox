import React, { useEffect } from 'react';

import {
  MdClose,
  MdInfoOutline,
  MdTaskAlt,
  MdErrorOutline,
} from 'react-icons/md';

import useToast from '../../hooks/useToast';
import ToastMessage from '../../models/Toast';

import {
  CloseToastButton,
  ToastContainer,
  ToastContent,
  ToastMessage as Message,
} from './Toast.styles';

interface ToastProps {
  message: ToastMessage;
  style: Record<string, unknown>;
  timeOut?: number;
}

const icons = {
  info: <MdInfoOutline size={24} />,
  error: <MdErrorOutline size={24} />,
  success: <MdTaskAlt size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style, timeOut }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    if (timeOut) {
      const timer = setTimeout(() => {
        removeToast(message.id);
      }, timeOut);

      return () => {
        clearTimeout(timer);
      };
    }

    return () => {};
  }, [removeToast, message.id, timeOut]);

  return (
    <ToastContainer style={style}>
      <ToastContent
        type={message.type}
        hasDescription={Number(!!message.description)}
      >
        {React.cloneElement(icons[message.type || 'info'], {
          className: 'toast-icon',
        })}

        <Message>
          <p className="toast-title">{message.title}</p>
          {message.description && (
            <p className="toast-description">{message.description}</p>
          )}
        </Message>

        <CloseToastButton onClick={() => removeToast(message.id)}>
          <MdClose size={18} />
        </CloseToastButton>
      </ToastContent>
    </ToastContainer>
  );
};

Toast.defaultProps = {
  timeOut: 0,
};

export default Toast;
