import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import useNavStore from '@store/useNavStore';

const HeaderNavItem = () => {
  const { menus } = useNavStore();

  return (
    <MenuList>
      {menus.map((menu) => (
        <MenuLink key={menu.path} to={menu.path}>
          <Typography title={menu.title} size="small" />
        </MenuLink>
      ))}
    </MenuList>
  );
};

export default HeaderNavItem;

const MenuList = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const MenuLink = styled(Link)`
  display: inline-block;
  padding: 0 26px;
`;
