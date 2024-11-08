import styled from 'styled-components';
const Item = styled.div`
  display: flex;
  align-items: flex-start;
  position: fixed;
  top: 50%;
  bottom: 50%;
  margin: auto;
  gap: 2.4rem;
  width: 102.4rem;
  height: 34.4rem;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.alternative};
  @media (max-width: 1055px) {
    flex-direction: column;
    width: 97%;
    height: max-content;
  }
`;
const Img = styled.img`
  width: 28rem;
  height: 28rem;
  object-fit: cover;

  @media (max-width: 1055px) {
    height: 20rem;
    width: 100%;
  }
`;
const Close = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
const Title = styled.h3`
  font-size: ${({ theme }) => theme.text.size.h3};
  font-weight: ${({ theme }) => theme.text.weight.black};
  color: ${({ theme }) => theme.text.color.accent};
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  color: ${({ theme }) => theme.text.color.accent};
  line-height: 2.2rem;
  margin: 1.6rem 0;
`;
export { Item, Img, Close, Icon, Title, Text };
