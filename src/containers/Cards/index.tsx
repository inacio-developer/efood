import * as S from './styles';
type GridPage = 'Restaurant' | 'Dish';
type CardsProps = {
  children: JSX.Element[];
  grid: GridPage;
};
const Cards = ({ children, grid }: CardsProps): JSX.Element => {
  return grid === 'Restaurant' ? (
    <S.GridRestaurant>{children}</S.GridRestaurant>
  ) : (
    <S.GridDish>{children}</S.GridDish>
  );
};
export { Cards };
