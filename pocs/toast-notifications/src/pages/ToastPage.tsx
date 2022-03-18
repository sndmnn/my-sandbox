import React, { useCallback, useMemo, useRef, useState } from 'react';
import useToast from '../hooks/useToast';
import Toast from '../models/Toast';

import { EmitToastButton, ToastInformationForm } from './ToastPage.styles';

const ToastPage: React.FC = () => {
  const { addToast } = useToast();

  const toastOptions: Omit<Toast, 'id'>[] = useMemo(
    () => [
      {
        type: 'success',
        title: 'Success Toast',
        description: 'This is a success toast',
      },
      {
        type: 'error',
        title: 'Error Toast',
        description: 'This is an error toast',
      },
      {
        type: 'info',
        title: 'Information Toast',
        description: 'This is an information toast',
      },
    ],
    [],
  );

  const [selectedToast, setSelectedToast] = useState<Omit<Toast, 'id'>>(
    toastOptions[0],
  );

  const toastTitleRef = useRef<HTMLInputElement>(null);
  const toastDescriptionRef = useRef<HTMLInputElement>(null);

  const emitToast = useCallback(() => {
    const title = toastTitleRef.current?.value;
    const description = toastDescriptionRef.current?.value;

    addToast({
      type: selectedToast.type,
      title: title || selectedToast.title,
      description,
    });
  }, [addToast, selectedToast.title, selectedToast.type]);

  return (
    <div>
      <h1>Create a Toast</h1>
      <ToastInformationForm>
        <select
          onChange={e =>
            setSelectedToast(toastOptions[e.target.options.selectedIndex])
          }
        >
          {toastOptions.map(toastOption => (
            <option key={toastOption.type} value={toastOption.type}>
              {toastOption.title}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Toast title" ref={toastTitleRef} />
        <input
          type="text"
          placeholder="Toast description"
          ref={toastDescriptionRef}
        />
      </ToastInformationForm>
      <EmitToastButton onClick={emitToast}>Emit Toast</EmitToastButton>
    </div>
  );
};

export default ToastPage;
