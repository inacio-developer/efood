import * as S from './styles';
type PropsModal = {
  children?: JSX.Element;
  flex?: S.Flex;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const Modal = ({ children, flex, onClick }: PropsModal) => (
  <S.Div
    $flexDirection={flex?.$flexDirection}
    $justifyContent={flex?.$justifyContent}
    $align={flex?.$align}
    onClick={onClick}
  >
    {children}
  </S.Div>
);
export { Modal };
