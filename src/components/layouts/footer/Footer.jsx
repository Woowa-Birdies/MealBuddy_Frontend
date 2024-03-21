import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter>i&apos;m footer</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100vw;
  height: 446px;
  border-top: 1px solid;
  background-color: ${({ theme }) => theme.color.contentSub};
`;
