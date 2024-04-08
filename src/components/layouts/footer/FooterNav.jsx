import Label from '@components/ui/Label/Label';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import useFooterStore from '@store/useFooterStore';
import styled from 'styled-components';

const FooterNav = () => {
  const { footerData } = useFooterStore();

  const renderItem = (item, type) => {
    const commonProps = {
      content: item.content,
      size: 'large',
      type: item.type,
      to: item.to,
    };

    switch (type) {
      case 'label':
        return <Label color="contentWhite" {...commonProps} />;
      case 'paragraphy':
        return <Paragraphy color="contentTertiary" {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <StyledNav>
      {footerData.map((section) => (
        <FooterNavItem key={section.title}>
          {section.items.map((item) => (
            <li key={item.content}>{renderItem(item, section.type)}</li>
          ))}
        </FooterNavItem>
      ))}
    </StyledNav>
  );
};

export default FooterNav;

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-top: 27.75px;
  margin-bottom: 75.75px;
`;

const FooterNavItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 31.5px;
  -webkit-box-flex: 1;
  flex: 1;
`;
