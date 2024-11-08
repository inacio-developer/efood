import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.text.size.h4};
  font-weight: ${({ theme }) => theme.text.weight.black};
  color: ${({ theme }) => theme.text.color.accent};
  margin-top: 0.8rem;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  color: ${({ theme }) => theme.text.color.accent};
  line-height: 2.2rem;
  margin: 0.8rem 0;
`;

export { Img, Title, Text };
