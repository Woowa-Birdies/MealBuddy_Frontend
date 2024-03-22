import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter>i&apos;m footer</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  display: block;
  border-top: 1px solid;
  background-color: ${({ theme }) => theme.color.contentSub};
  padding-top: 60px;
  padding-right: 24px;
  padding-bottom: 85px;
  padding-left: 24px;
`;
