import React from 'react';

import { ContentWrapperContainer } from './ContentWrapper.styles';

interface ContentWrapperComponentProps {
  className?: string;
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperComponentProps> = ({
  className,
  children,
}) => {
  return (
    <ContentWrapperContainer className={className}>
      {children}
    </ContentWrapperContainer>
  );
};

ContentWrapper.defaultProps = {
  className: '',
};

export default ContentWrapper;
