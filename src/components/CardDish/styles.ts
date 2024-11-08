import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.text.size.h4};
  font-weight: ${({ theme }) => theme.text.weight.black};
  color: ${({ theme }) => theme.text.color.accent};
  margin-top: 0.8rem;
`;

const Text = styled.p`
  display: -webkit-box;
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  color: ${({ theme }) => theme.text.color.accent};
  line-height: 2.2rem;
  margin: 0.8rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export { Img, Title, Text };
