import { ROUTES } from '@enums/CommonEnum';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Typography = ({ content = '', size, color, type, to }) => {
  const renderContent = () => {
    if (type === 'link') {
      return <Link to={to}>{content}</Link>;
    }
    return content;
  };
  return (
    <StyledSpan $size={size} $color={color}>
      {renderContent()}
    </StyledSpan>
  );
};

Typography.defaultProps = {
  size: 'small',
  color: 'contentPrimary',
  type: 'default',
  to: ROUTES.HOME,
};

Typography.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xl']),
  color: PropTypes.oneOf([
    'primary',
    'contentPrimary',
    'contentSecondary',
    'contentTertiary',
    'contentWhite',
  ]),
  type: PropTypes.oneOf(['default', 'link']),
  to: (props, propName, componentName) => {
    if (
      props.type === 'link' &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error(
        `\`${componentName}\`에서 \`type\`이 'link'일 때 \`${propName}\` prop은 필수이며, 그 값은 \`${props[propName]}\`입니다.`,
      );
    }
    return null;
  },
};

export default Typography;

const StyledSpan = styled.span`
  font-size: ${({ theme, $size }) => theme.headings[$size].fontSize};
  font-weight: ${({ theme, $size }) => theme.headings[$size].fontWeight};
  line-height: ${({ theme, $size }) => theme.headings[$size].lineHeight};
  color: ${({ theme, $color }) => theme.color[$color]};
`;
