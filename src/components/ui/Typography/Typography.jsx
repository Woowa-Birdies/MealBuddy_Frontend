import PropTypes from 'prop-types';
import styled from 'styled-components';

const Typography = ({ title = '', size }) => {
  return <StyledSpan $size={size}>{title}</StyledSpan>;
};

Typography.defaultProps = {
  size: 'small',
};

Typography.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xl']),
};

export default Typography;

const StyledSpan = styled.span`
  font-size: ${({ theme, $size }) => theme.headings[$size].fontSize};
  font-weight: ${({ theme, $size }) => theme.headings[$size].fontWeight};
  line-height: ${({ theme, $size }) => theme.headings[$size].lineHeight};
`;
