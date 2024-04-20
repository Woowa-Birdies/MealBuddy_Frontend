import Footer from '@components/layouts/footer';
import Header from '@components/layouts/header';
import styled from 'styled-components';
import useAuthentication from '@hooks/useAuthentication';

const Base = ({ children }) => {
  useAuthentication();

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Base;

const StyledMain = styled.main`
  margin-top: 0;
  padding-top: 66px;
  width: 100%;
  height: auto;
`;
