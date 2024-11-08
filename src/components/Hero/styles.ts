import styled from 'styled-components';
import bg from '../../assets/images/backgrounds/header-background.svg';

const heroBase = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-image: url(${bg});
`;

const HeroHome = styled(heroBase)`
  flex-direction: column;
  height: 36rem;
  padding: 4rem 0;

  h1 {
    font-size: ${({ theme }) => theme.text.size.h1};
    font-weight: ${({ theme }) => theme.text.weight.black};
    color: ${({ theme }) => theme.text.color.primary};
    text-align: center;
    width: 53.9rem;
    height: 8.4rem;
  }

  @media (max-width: 1048px) {
    h1 {
      width: 30.9rem;
      font-size: ${({ theme }) => theme.text.size.h3};
    }
  }
`;

const HeroRestaurant = styled(heroBase)`
  height: 16.3rem;
  padding: 4rem 0 4.35rem 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1048px) {
    width: 90%;
    font-size: ${({ theme }) => theme.text.size.h3};
    margin: 0 auto;
  }

  @media (max-width: 604px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export { HeroHome, HeroRestaurant, Div };
