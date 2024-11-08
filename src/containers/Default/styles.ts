import styled from 'styled-components';
import { Styles } from '.';
const Container = styled.section<Styles>`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: ${({ $flex }) => $flex?.$direction || 'row'};
  justify-content: ${({ $flex }) => $flex?.$justifyContent || 'flex-start'};
  align-items: ${({ $flex }) => $flex?.$align || 'stretch'};
  padding: ${({ $padding }) => $padding.$top}rem 0
    ${({ $padding }) => $padding.$bottom}rem 0;
`;
export { Container };
