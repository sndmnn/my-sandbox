import React, { createContext, useCallback, useMemo, useState } from 'react';
import { v4 as generateUUIDV4 } from 'uuid';

import ToastStack from '../components/ToastStack';
import ToastMessage from '../models/Toast';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = generateUUIDV4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(oldMessages => [toast, ...oldMessages]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  const providerValue = useMemo(
    () => ({ addToast, removeToast }),
    [addToast, removeToast],
  );

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
      <ToastStack messages={messages} />
    </ToastContext.Provider>
  );
};
