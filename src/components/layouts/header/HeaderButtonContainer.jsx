import styled from 'styled-components';
import HeaderButton from '@components/ui/Button/HeaderButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import useLoginStore from '@store/useLoginStore';
import UserIcon from '@assets/images/svg/user.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';

const HeaderButtonContainer = () => {
  const nav = useNavigate();
  const isLogin = useLoginStore((state) => state.isLogin);

  // const handleButtonClick = (e) => {
  //   console.log('click left button', e);
  // };
  // const handleMenuClick = (e) => {
  //   console.log('click', e);
  // };
  // const items = [
  //   {
  //     label: '1st menu item',
  //     key: '1',
  //   },
  //   {
  //     label: '2nd menu item',
  //     key: '2',
  //   },
  //   {
  //     label: '3rd menu item',
  //     key: '3',
  //     danger: true,
  //   },
  //   {
  //     label: '4rd menu item',
  //     key: '4',
  //     danger: true,
  //     disabled: true,
  //   },
  // ];
  // const menuProps = {
  //   items,
  //   onClick: handleMenuClick,
  // };

  // const CustomButton = ({ src, width, height }) => (
  //   <Button icon={<SvgComponent src={src} width={width} height={height} />}>Dropdown</Button>
  // );

  return (
    <ButtonContainer>
      {isLogin ? (
        <>
          {/* <Dropdown menu={{ items }}>123</Dropdown> */}
          <div
            style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <SvgComponent src={UserIcon} width={24} height={30} />
          </div>
        </>
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
