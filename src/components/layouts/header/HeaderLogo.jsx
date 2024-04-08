import { Link } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import MainLogo from '@assets/images/svg/logo.svg?react';

import SvgComponent from '@components/ui/Logo/SvgComponent';

const HeaderLogo = () => {
  return (
    <h1>
      <Link to={ROUTES.HOME}>
        <SvgComponent src={MainLogo} width={128} height={28.5} />
      </Link>
    </h1>
  );
};

export default HeaderLogo;
