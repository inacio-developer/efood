import { Button } from '../Button';
import * as S from './styles';

type OrderProps = {
  id: string;
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const Order = ({ id, status }: OrderProps) => {
  const closeModal = (c: React.MouseEvent) => {
    status(false);
  };

  return (
    <>
      <S.Title>Pedido realizado - {id}</S.Title>
      <S.Text>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido. <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras. <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.{' '}
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.Text>
      <Button
        text={'Concluir'}
        styleButton={{
          $width: '100%',
          $height: '2.4rem',
          $padding: '0.4rem',
          $align: 'center',
          $color: 'primary',
          $backgroundColor: 'primary',
        }}
        onClick={closeModal}
      />
    </>
  );
};

export { Order };
