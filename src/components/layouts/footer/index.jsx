import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      i&apos;m footeri&apos;m footer i&apos;m footeri&apos;m footeri&apos;m footeri&apos;m
      footeri&apos;m footeri&apos;m footeri&apos;m footeri&apos;m footeri&apos;m footeri&apos;m
      footeri&apos;m footeri&apos;m footer
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: block;
  background-color: ${({ theme }) => theme.color.contentSub};
  padding-top: 69px;
  padding-left: 320px;
  padding-right: 24px;
  padding-bottom: 95px;
`;
