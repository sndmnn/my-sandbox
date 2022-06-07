import React from 'react';
import StylableComponent from '../StylableComponent';

import { ContentWrapperContainer } from './ContentWrapper.styles';

interface ComponentProps extends StylableComponent {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ComponentProps> = ({ className, children }) => {
  return (
    <ContentWrapperContainer className={className}>
      {children}
    </ContentWrapperContainer>
  );
};

export default ContentWrapper;
