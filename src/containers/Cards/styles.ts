import styled from 'styled-components';
const baseGrid = styled.ul`
  display: grid;
`;
const GridRestaurant = styled(baseGrid)`
  grid-template-columns: 1fr 1fr;
  column-gap: 8rem;
  row-gap: 4.8rem;
  @media (max-width: 1044px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const GridDish = styled(baseGrid)`
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 3.2rem;
  @media (max-width: 1044px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  @media (max-width: 557px) {
    grid-template-columns: 1fr;
  }
`;
export { GridRestaurant, GridDish };
