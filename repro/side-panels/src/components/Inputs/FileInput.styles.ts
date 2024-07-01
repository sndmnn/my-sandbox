import styled from 'styled-components';

export const FileInputContainer = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px dashed
    ${({ error }) =>
      error ? 'var(--color-red-200)' : 'var(--color-black-200)'};
  border-radius: 8px;
  min-height: 248px;

  font: var(--font-size-p) var(--font-sans);
  cursor: pointer;

  .upload-icon {
    height: 48px;
    width: 48px;
    margin-bottom: 1rem;
  }

  .select-file-text {
    text-decoration: underline;
  }

  .accepted-files {
    margin-top: 1rem;
    font-weight: 300;

    & > :not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Input = styled.div`
  display: flex;

  label {
    cursor: pointer;
  }
`;

export const FileInputErrorWrapper = styled.div`
  .error {
    color: var(--color-red-200);
    font: var(--font-size-s) var(--font-sans);
  }
`;
