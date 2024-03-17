import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter>i&apos;m footer</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100px;
  border-top: 1px solid;
  background-color: #f8f9fa;
`;
