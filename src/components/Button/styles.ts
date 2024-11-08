import styled from 'styled-components';

export type ButtonStylesProps = {
  $width: string;
  $height: string;
  $padding: string;
  $align?: string;
  $color: 'primary' | 'alternative' | 'disabled';
  $backgroundColor: 'primary' | 'alternative' | 'disabled';
};

const Button = styled.button<ButtonStylesProps>`
  min-width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $padding }) => $padding};
  text-align: ${({ $align }) => $align};
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ $color, theme }) =>
    $color === 'primary'
      ? theme.text.color.primary
      : $color === 'alternative'
        ? theme.text.color.alternative
        : theme.text.color.accent};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor === 'primary'
      ? theme.colors.primary
      : $backgroundColor === 'alternative'
        ? theme.colors.alternative
        : theme.colors.disabled};
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

export { Button };
