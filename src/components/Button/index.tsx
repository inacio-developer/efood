import { ButtonStylesProps } from './styles';
import * as S from './styles';

type typeButton = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  text: String;
  styleButton: ButtonStylesProps;
  type?: typeButton;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
};

const Button = ({
  text,
  styleButton,
  type,
  onClick,
  onSubmit,
}: ButtonProps) => (
  <S.Button {...styleButton} type={type} onClick={onClick} onSubmit={onSubmit}>
    {text}
  </S.Button>
);
export { Button };
