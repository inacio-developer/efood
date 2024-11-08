import styled from 'styled-components';

const Button = styled.button`
  text-decoration: none;
  font-size: ${({ theme }) => theme.text.size.h3};
  font-weight: ${({ theme }) => theme.text.weight.black};
  color: ${({ theme }) => theme.text.color.primary};
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export { Button };
