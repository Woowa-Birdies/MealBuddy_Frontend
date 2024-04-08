import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import useNavStore from '@store/useNavStore';

const HeaderNavItem = () => {
  const { menus } = useNavStore();

  return (
    <HeaderGlobalNav>
      <MenuList>
        {menus.map((menu) => (
          <MenuLink key={menu.path} to={menu.path}>
            <Typography content={menu.title} size="small" />
          </MenuLink>
        ))}
      </MenuList>
    </HeaderGlobalNav>
  );
};

export default HeaderNavItem;

const HeaderGlobalNav = styled.ul`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  height: 66px;
`;

const MenuList = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 39px;
`;

const MenuLink = styled(Link)``;
