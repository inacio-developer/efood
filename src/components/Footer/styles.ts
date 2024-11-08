import styled from 'styled-components';
import bg from '../../assets/images/backgrounds/header-background.svg';
const Footer = styled.footer`
  height: 29.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  background-image: url(${bg});
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.3rem;
`;
const Icons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;
const item = styled.li`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
const img = styled.img`
  width: 100%;
  height: 100%;
`;
const Span = styled.span`
  display: block;
  width: 48rem;
  color: ${({ theme }) => theme.text.color.primary};
  font-size: ${({ theme }) => theme.text.size.details};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  text-align: center;
  @media (max-width: 476px) {
    width: 30rem;
    font-size: 0.8rem;
  }
`;
export { Footer, Div, Icons, item, img, Span };
