import FooterLogo from '@components/layouts/footer/FooterLogo';
import FooterNav from '@components/layouts/footer/FooterNav';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import { ROUTES } from '@enums/CommonEnum';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo />
      <FooterNav />
      <Paragraphy
        color="contentTertiary"
        content="© 2024 NYAMMATE.COM ALL RIGHTS RESERVED
  "
        type="link"
        to={ROUTES.HOME}
      />
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: block;
  background-color: ${({ theme }) => theme.color.contentSub};
  padding-top: 69px;
  padding-left: 320px;
  padding-right: 24px;
  padding-bottom: 69px;
`;
