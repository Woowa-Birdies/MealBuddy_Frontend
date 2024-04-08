import { ROUTES } from '@enums/CommonEnum';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Label = ({ content = '', size, color, type, to }) => {
  const renderContent = () => {
    if (type === 'link') {
      return <Link to={to}>{content}</Link>;
    }
    return content;
  };

  return (
    <StyledLabel $size={size} $color={color}>
      {renderContent()}
    </StyledLabel>
  );
};

Label.defaultProps = {
  size: 'small',
  color: 'contentPrimary',
  type: 'default',
  to: ROUTES.HOME,
};

Label.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xl', 'xxl']),
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

export default Label;

const StyledLabel = styled.label`
  font-size: ${({ theme, $size }) => theme.labels[$size].fontSize};
  font-weight: ${({ theme, $size }) => theme.labels[$size].fontWeight};
  line-height: ${({ theme, $size }) => theme.labels[$size].lineHeight};
  color: ${({ theme, $color }) => theme.color[$color]};
`;
