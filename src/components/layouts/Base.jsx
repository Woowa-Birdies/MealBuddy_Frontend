import Footer from '@/components/layouts/footer/Footer';
import NavBar from '@/components/layouts/navbar/NavBar';
import styled from 'styled-components';

const Base = ({ children }) => {
  return (
    <StyledBase>
      <NavBar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledBase>
  );
};

export default Base;

const StyledBase = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 100px;
`;
