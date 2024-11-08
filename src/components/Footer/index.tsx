import { Logo } from '../Logo';
import facebook from '../../assets/images/icons/networks-facebook.svg';
import twitter from '../../assets/images/icons/networks-twitter.svg';
import instagram from '../../assets/images/icons/networks-instagram.svg';
import * as S from './styles';
type Icons = {
  name: string;
  url: string;
};
const icons: Icons[] = [
  { name: 'instagram', url: instagram },
  { name: 'Facebook', url: facebook },
  { name: 'Twitter', url: twitter },
];
const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <S.Div>
        <Logo />
        <S.Icons>
          {icons.map((icon, i) => (
            <S.item key={i}>
              <a href="#">
                <S.img src={icon.url} alt={`logo ${icon.name}`} />
              </a>
            </S.item>
          ))}
        </S.Icons>
      </S.Div>
      <S.Span>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Span>
    </S.Footer>
  );
};
export { Footer };
