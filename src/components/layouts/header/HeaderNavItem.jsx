import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, Typography } from 'antd';
import styled from 'styled-components';
import TitleTypography from '@components/ui/Typography/Typography';
import useNavStore from '@store/useNavStore';
import { ROUTES } from '@enums/CommonEnum';

const HeaderNavItem = () => {
  const nav = useNavigate();
  const { menus } = useNavStore();
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case 'ask':
        nav(ROUTES.USERREQUESTSTATUS);
        break;
      case 'recruit':
        nav(ROUTES.USERACTIVITY);
        break;
      default:
        break;
    }
  };

  return (
    <HeaderGlobalNav>
      <MenuList>
        {menus.map((menu) => (
          <MenuLink
            key={menu.path}
            as={menu.title === '냠관리' ? 'div' : Link}
            to={menu.title !== '냠관리' ? menu.path : undefined}
            onMouseEnter={() => (menu.title === '냠관리' ? setHoveredMenu(menu.title) : null)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {menu.title === '냠관리' && hoveredMenu === menu.title ? (
              <Dropdown
                menu={{
                  items: [
                    {
                      label: <span style={{ fontSize: '14px' }}>냠냠신청</span>,
                      key: 'ask',
                    },
                    {
                      label: <span style={{ fontSize: '14px' }}>냠냠모집</span>,
                      key: 'recruit',
                    },
                  ],
                  onClick: handleMenuClick,
                  style: {
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
                placement="bottom"
              >
                <Typography
                  as="span"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '1.111vw',
                    fontWeight: 700,
                    lineHeight: '1.555vw',
                    color: '#FF544A',
                    padding: '17px 0',
                  }}
                >
                  {menu.title}
                </Typography>
              </Dropdown>
            ) : (
              <TitleTypography content={menu.title} size="small" />
            )}
          </MenuLink>
        ))}
      </MenuList>
    </HeaderGlobalNav>
  );
};

export default HeaderNavItem;

const HeaderGlobalNav = styled.ul`
  display: flex;
  justify-content: center;
  height: 66px;
`;

const MenuList = styled.li`
  display: flex;
  align-items: center;
  gap: 39px;
`;

const MenuLink = styled(Link)`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;
