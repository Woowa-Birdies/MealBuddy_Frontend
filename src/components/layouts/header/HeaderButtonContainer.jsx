import styled from 'styled-components';
import HeaderButton from '@components/ui/Button/HeaderButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import useLoginStore from '@store/useLoginStore';

import HeaderDropdown from '@components/layouts/header/HeaderDropdown';

const HeaderButtonContainer = () => {
  const nav = useNavigate();
  const { isLogin } = useLoginStore();

  return (
    <ButtonContainer>
      {isLogin ? (
        <HeaderDropdown />
      ) : (
        <>
          <HeaderButton type="sub" title="회원가입" onClick={() => nav(ROUTES.SIGNUP)} />
          <HeaderButton type="primary" title="로그인" onClick={() => nav(ROUTES.LOGIN)} />
        </>
      )}
    </ButtonContainer>
  );
};

export default HeaderButtonContainer;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
