import React from 'react';
import { ContentWrapperContainer } from './ContentWrapper.styles';

interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ComponentProps> = ({ children, className }) => (
  <ContentWrapperContainer className={className}>
    {children}
  </ContentWrapperContainer>
);

export default ContentWrapper;
