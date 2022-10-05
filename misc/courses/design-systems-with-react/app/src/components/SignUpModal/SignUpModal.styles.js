import React from 'react';
import styled from 'styled-components';

export const SignUpTitle = styled.h1`
  font-family: var(--font-sans);
  font-size: var(--type-scale-h2);
  color: var(--color-text);
`;

export const SignUpText = styled.p`
  font-family: var(--font-sans);
  font-size: var(--type-scale-p);
  color: var(--color-text);
  text-align: center;

  width: 70%;
  margin-bottom: 40px;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  width: 24px;
  height: 24px;

  background: none;
  border: none;

  cursor: pointer;
`;
