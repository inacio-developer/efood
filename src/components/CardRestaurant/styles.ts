import styled from 'styled-components';
const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.card_home};
  padding: 0.8rem;
`;
const Tags = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  gap: 0.8rem;
`;
const Tag = styled.div`
  padding: 0.6rem 0.4rem;
  height: 2.6rem;
  color: ${({ theme }) => theme.text.color.alternative};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  background-color: ${({ theme }) => theme.colors.alternative};
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h3`
  font-weight: ${({ theme }) => theme.text.weight.bold};
  font-size: ${({ theme }) => theme.text.size.h3};
  color: ${({ theme }) => theme.text.color.primary};
`;
const Grade = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const Span = styled.span`
  font-size: ${({ theme }) => theme.text.size.h3};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.text.color.primary};
`;
const Icon = styled.img`
  width: 2.1rem;
  height: 2.1rem;
`;
const Text = styled.p`
  display: -webkit-box;
  font-weight: ${({ theme }) => theme.text.weight.regular};
  font-size: ${({ theme }) => theme.text.size.standard};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.text.color.primary};
  margin: 1.6rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
export { Content, Tags, Tag, Div, Img, Title, Grade, Span, Icon, Text };
