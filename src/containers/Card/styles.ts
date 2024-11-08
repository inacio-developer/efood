import styled from 'styled-components';

const baseCard = styled.li`
  display: grid;
  grid-template-columns: 1fr;
`;

const CardHome = styled(baseCard)`
  position: relative;
  grid-template-rows: 21.7rem 18.1rem;
  width: 47.2rem;
  height: 40rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.alternative};

  @media (max-width: 1044px) {
    width: 90%;
  }
`;

const CardRestaurant = styled(baseCard)`
  grid-template-rows: 16.7rem 14.7rem;
  height: 33.8rem;
  width: 32rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.alternative};

  @media (max-width: 1044px) {
    width: 90%;
  }

  @media (max-width: 557px) {
    width: 90%;
  }
`;

export { CardHome, CardRestaurant };
