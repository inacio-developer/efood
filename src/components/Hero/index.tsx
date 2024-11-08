import { Menu } from '../Menu';
import { Logo } from '../Logo';
import * as S from './styles';
import { Container } from '../../containers/Default';

type typeHero = 'Home' | 'Restaurant';

type HeroProps = {
  type: typeHero;
};

const Hero = ({ type }: HeroProps) => {
  const hero = (): JSX.Element => {
    if (type === 'Home') {
      return (
        <S.HeroHome>
          <Logo />
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </S.HeroHome>
      );
    } else {
      return (
        <>
          <S.HeroRestaurant>
            <Container styles={{ $padding: { $top: 4, $bottom: 4.35 } }}>
              <S.Div>
                <Menu>
                  <Logo />
                </Menu>
              </S.Div>
            </Container>
          </S.HeroRestaurant>
        </>
      );
    }
  };

  return hero();
};

export { Hero };
