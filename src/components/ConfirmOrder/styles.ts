import styled from 'styled-components';
const Title = styled.h4`
  font-size: ${({ theme }) => theme.text.size.h4};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.text.color.alternative};
  margin-bottom: 1.6rem;
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  color: ${({ theme }) => theme.text.color.alternative};
  margin-bottom: 2.2rem;
`;
export { Title, Text };
