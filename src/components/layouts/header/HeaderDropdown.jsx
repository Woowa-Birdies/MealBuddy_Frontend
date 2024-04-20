import { ROUTES } from '@enums/CommonEnum';
import UserIcon from '@assets/images/svg/user.svg?react';
import UserIconHover from '@assets/images/svg/userHover.svg?react';
import AlarmIcon from '@assets/images/svg/alarm.svg?react';
import AlarmIconHover from '@assets/images/svg/alarmHover.svg?react';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import { Dropdown } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginStore from '@store/useLoginStore';
import styled from 'styled-components';
import handleError from '@utils/ErrorHandler';
import useConfirmModal from '@hooks/component/modal/useConfirmModal';
import Cookies from 'js-cookie';
import loginApi from '@api/biz/loginApi';

const HeaderDropdown = () => {
  const nav = useNavigate();
  const showConfirm = useConfirmModal();

  const { setIsLogin } = useLoginStore();

  const [isUserHovering, setIsUserHovering] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isAlarmHovering, setIsAlarmHovering] = useState(false);
  const [alarmDropdownOpen, setAlarmDropdownOpen] = useState(false);

  const alarmItems = [
    {
      label: '알람1',
      key: 'alarm1',
    },
    {
      label: '알람2',
      key: 'alarm2',
    },
  ];

  const handleLogout = async () => {
    try {
      await showConfirm('로그아웃 하시겠습니까?');
      await loginApi.postLogout();
      Cookies.remove('__Secure-access');
      nav(ROUTES.LOGOUT);
      setIsLogin(false);
    } catch (error) {
      handleError(error);
    }
  };

  // 드롭다운 메뉴 클릭 이벤트
  const handleMenuClick = ({ key }) => {
    switch (key) {
      case 'myPage':
        nav(ROUTES.MYPAGE);
        break;
      case 'logout':
        handleLogout();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Dropdown
        menu={{ items: alarmItems }}
        trigger={['click']}
        onMouseEnter={() => setIsAlarmHovering(true)}
        onMouseLeave={() => setIsAlarmHovering(false)}
        onOpenChange={(open) => setAlarmDropdownOpen(open)}
      >
        <DropdownTrigger>
          <SvgComponent
            src={isAlarmHovering || alarmDropdownOpen ? AlarmIconHover : AlarmIcon}
            width={18}
            height={18.72}
          />
        </DropdownTrigger>
      </Dropdown>
      <Dropdown
        menu={{
          items: [
            {
              label: '마이 페이지',
              key: 'myPage',
            },
            {
              label: '로그아웃',
              key: 'logout',
              danger: true,
            },
          ],
          onClick: handleMenuClick,
        }}
        trigger={['click']}
        onMouseEnter={() => setIsUserHovering(true)}
        onMouseLeave={() => setIsUserHovering(false)}
        onOpenChange={(open) => setUserDropdownOpen(open)}
      >
        <DropdownTrigger>
          <SvgComponent
            src={isUserHovering || userDropdownOpen ? UserIconHover : UserIcon}
            width={18}
            height={22.5}
          />
        </DropdownTrigger>
      </Dropdown>
    </>
  );
};

export default HeaderDropdown;

const DropdownTrigger = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
