import useSampleStore from '@/store/useSampleStore';
import styled from 'styled-components';

const NavBar = () => {
  const sampleId = useSampleStore((state) => state.sampleId); // zustand store의 sampleId state를 참조한다.

  return <StyledDiv>NavBar {sampleId}</StyledDiv>;
};

export default NavBar;

const StyledDiv = styled.div`
  height: 60px;
  border: 1px solid;
`;
