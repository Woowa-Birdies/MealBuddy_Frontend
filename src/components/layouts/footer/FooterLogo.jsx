import { Link } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import LogoImage from '@assets/images/svg/logo.svg?react';

const FooterLogo = () => {
  return (
    <h1>
      <Link to={ROUTES.HOME}>
        <LogoImage width="152.6" height="34" />
      </Link>
    </h1>
  );
};

export default FooterLogo;
