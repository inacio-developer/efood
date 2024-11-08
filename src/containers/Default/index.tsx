import * as S from './styles';
export type Styles = {
  $flex?: {
    $direction?: string;
    $align?: string;
    $justifyContent?: string;
  };
  $padding: {
    $top: number;
    $bottom: number;
  };
};
type PropsContainer = {
  children: JSX.Element;
  styles: Styles;
};
const Container = ({ children, styles }: PropsContainer): JSX.Element => {
  return <S.Container {...styles}>{children}</S.Container>;
};
export { Container };
