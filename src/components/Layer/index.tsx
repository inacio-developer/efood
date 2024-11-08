import { Container } from '../../containers/Default';
import { Restaurant } from '../../model/typeRestaurant';
import * as S from './styles';

const Layer = ({ capa, tipo, titulo }: Restaurant): JSX.Element => (
  <>
    <S.Div style={{ backgroundImage: `url(${capa})` }}>
      <S.Overlay />
      <Container
        styles={{
          $padding: { $top: 0, $bottom: 0 },
          $flex: { $direction: 'column', $justifyContent: 'space-between' },
        }}
      >
        <>
          <S.Category>{tipo}</S.Category>
          <S.Title>{titulo}</S.Title>
        </>
      </Container>
    </S.Div>
  </>
);

export { Layer };
