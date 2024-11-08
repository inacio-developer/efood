import styled from 'styled-components';

const Side = styled.aside<{ opacity?: number }>`
  width: 36rem;
  min-height: 100%;
  padding: 3.2rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.alternative};
  overflow-y: overlay;
  overflow-x: hidden;
  opacity: ${({ opacity }) => opacity || '1'};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 1.8rem;
`;

const DivEmpty = styled(Div)`
  flex-direction: column;
  justify-content: flex-start;
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.text.color.alternative};
`;

const Card = styled.li`
  display: flex;
  gap: 0.8rem;
  position: relative;
  width: 34.4rem;
  height: 10rem;
  padding: 0.8rem 0.8rem 1.2rem 0.8rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.text.color.primary};
`;

const Img = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  background-color: transparent;
  outline: none;
  border: none;
  width: 1.6rem;
  height: 1.6rem;
  bottom: 0.8rem;
  right: 0.8rem;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const IconEmpty = styled.img`
  width: 18rem;
  margin-bottom: 1.6rem;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.text.size.h3};
  font-weight: ${({ theme }) => theme.text.weight.black};
  margin-bottom: 1.6rem;
`;

const Price = styled.span`
  font-size: ${({ theme }) => theme.text.size.standard};
  font-weight: ${({ theme }) => theme.text.weight.regular};
`;

export {
  Side,
  DivEmpty,
  IconEmpty,
  Div,
  Span,
  Card,
  Img,
  Button,
  Icon,
  Title,
  Price,
};
