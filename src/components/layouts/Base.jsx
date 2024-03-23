import Footer from '@components/layouts/footer';
import Header from '@components/layouts/header';
import styled from 'styled-components';

const Base = ({ children }) => {
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
  padding-top: 88px;
`;
