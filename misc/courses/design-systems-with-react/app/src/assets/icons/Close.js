import styled from 'styled-components';

const IconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

const CloseIcon = () => (
  <IconWrapper
    aria-hidden="true"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_227)">
      <path
        d="M25.3334 8.54667L23.4534 6.66667L16 14.12L8.54669 6.66667L6.66669 8.54667L14.12 16L6.66669 23.4533L8.54669 25.3333L16 17.88L23.4534 25.3333L25.3334 23.4533L17.88 16L25.3334 8.54667Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_227">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </IconWrapper>
);

export default CloseIcon;
