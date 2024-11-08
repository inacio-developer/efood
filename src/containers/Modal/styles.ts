import styled from 'styled-components';
export type Flex = {
  $flexDirection?: string;
  $justifyContent?: string;
  $align?: string;
};
const Div = styled.div<Flex>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.modal};
  z-index: 800;
`;
export { Div };
