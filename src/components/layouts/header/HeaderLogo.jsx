import { Link } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import LogoImage from '@assets/images/svg/logo.svg?react';

const HeaderLogo = () => {
  return (
    <h1>
      <Link to={ROUTES.HOME}>
        <LogoImage />
      </Link>
    </h1>
  );
};

export default HeaderLogo;
