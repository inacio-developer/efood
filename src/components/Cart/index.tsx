import { Menu } from '../../model/typeMenu';
import { RootReduceType } from '../../store/rootReduce';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../features/cartSlice';
import { convertReal } from '../../utils/convertReal';
import { Button } from '../Button';
import cart_feedback from '../../assets/images/icons/cart-feedback.svg';
import trash from '../../assets/images/icons/cart-trash.svg';
import * as S from './styles';
import { Modal } from '../../containers/Modal';
import { Checkout } from '../Checkout';

type PropsCart = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Cart = ({ status }: PropsCart): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootReduceType) => state.cart);
  const products = data.products;
  const count = data.count;
  const total = data.totalV;
  const [areaAndress, setAreaAndress] = useState(false);

  const removeProduct = (product: Menu) => {
    dispatch(remove(product));
  };

  const nextForm = () => {
    setAreaAndress(true);
  };

  const closeModal = (click: React.MouseEvent) => {
    const { target, currentTarget } = click;

    if (target === currentTarget) status(false);
  };

  const renderProducts = (p: Menu): JSX.Element => (
    <S.Card key={p.id}>
      <S.Img src={p.foto} />
      <div>
        <S.Title>{p.nome}</S.Title>
        <S.Price>{convertReal(p.preco)}</S.Price>
      </div>
      <S.Button onClick={() => removeProduct(p)}>
        <S.Icon src={trash} />
      </S.Button>
    </S.Card>
  );

  return (
    <Modal
      onClick={closeModal}
      flex={{ $flexDirection: 'column', $align: 'flex-end' }}
    >
      <S.Side>
        <div style={{ display: areaAndress ? 'block' : 'none' }}>
          <Checkout initialState={status} status={setAreaAndress} />
        </div>
        <div style={{ display: count && !areaAndress ? 'block' : 'none' }}>
          <ul>{products.map(p => renderProducts(p))}</ul>
          <S.Div>
            <S.Span>Valor total</S.Span>
            <S.Span>{total}</S.Span>
          </S.Div>
          <Button
            text={'Continuar com a entrega'}
            styleButton={{
              $width: '100%',
              $height: '2.4rem',
              $padding: '0.4rem',
              $align: 'center',
              $color: 'primary',
              $backgroundColor: 'primary',
            }}
            onClick={nextForm}
          />
        </div>
        <div style={{ display: !count && !areaAndress ? 'block' : 'none' }}>
          <S.DivEmpty>
            <S.IconEmpty src={cart_feedback} />
            <S.Span>O seu carrinho está vazio 😕</S.Span>
          </S.DivEmpty>
        </div>
      </S.Side>
    </Modal>
  );
};

export { Cart };
