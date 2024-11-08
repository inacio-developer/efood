import * as S from './styles';
type TypeCard = 'Restaurant' | 'Dish';
type PropsCard = {
  type: TypeCard;
  children: JSX.Element;
};
const Card = ({ type, children }: PropsCard): JSX.Element => {
  const card: JSX.Element =
    type === 'Restaurant' ? (
      <S.CardHome>{children}</S.CardHome>
    ) : (
      <S.CardRestaurant>{children}</S.CardRestaurant>
    );
  return card;
};
export { Card };
