import { Button } from '../Button';
import star from '../../assets/images/icons/grade-star.svg';
import { Restaurant as TypeRestaurant } from '../../model/typeRestaurant';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const Restaurant = ({
  id,
  titulo,
  descricao,
  capa,
  avaliacao,
  destacado,
  tipo,
}: TypeRestaurant) => {
  const navigate = useNavigate();

  const goMenu = (click: React.MouseEvent) => {
    click.preventDefault();
    window.scrollTo(0, 0);
    navigate(`/restaurante/${id}/${titulo}`);
  };

  return (
    <>
      <S.Tags>
        {destacado && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>
          {tipo.substring(0, 1).toUpperCase() + tipo.substring(1, tipo.length)}
        </S.Tag>
      </S.Tags>
      <S.Img src={capa} />
      <S.Content>
        <S.Div>
          <S.Title>{titulo}</S.Title>
          <S.Grade>
            <S.Span>{avaliacao}</S.Span>
            <S.Icon src={star} />
          </S.Grade>
        </S.Div>
        <S.Text>{descricao}</S.Text>
        <Button
          text="Saiba mais"
          styleButton={{
            $width: '8.2rem',
            $height: '2.4rem',
            $padding: '0.4rem 0.6rem',
            $align: 'start',
            $color: 'alternative',
            $backgroundColor: 'alternative',
          }}
          onClick={goMenu}
        />
      </S.Content>
    </>
  );
};

export { Restaurant };
