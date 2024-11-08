import icon_close from '../../assets/images/icons/modal-close.svg';
import { Menu } from '../../model/typeMenu';
import { Modal } from '../../containers/Modal';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { add, total } from '../../features/cartSlice';
import { convertReal } from '../../utils/convertReal';
import * as S from './styles';
import { Cart } from '../Cart';
type DishDetailsProps = {
  item: Menu;
  state: boolean;
  onAction: () => void;
};
const ModalDish = ({ item, state, onAction }: DishDetailsProps) => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(false);
  const [modalDish, setModalDish] = useState(true);
  const handleCart = () => {
    dispatch(add(item));
    dispatch(total());
    setCart(true);
  };
  const renderCondition = () => {
    if (!modalDish && state) onAction();
  };
  useEffect(() => {
    renderCondition();
  }, [modalDish]);
  return !cart && modalDish ? (
    <>
      <Modal flex={{ $justifyContent: 'center', $align: 'center' }}>
        <>
          <S.Item>
            <S.Img src={item.foto} alt={`Foto do ${item.nome}`} />
            <div>
              <S.Close onClick={onAction}>
                <S.Icon src={icon_close} />
              </S.Close>
              <S.Title>{item.nome}</S.Title>
              <S.Text>
                {item.descricao}
                <br /> <br />
                Serve de: {item.porcao}
              </S.Text>
              <Button
                text={`Adicionar ao carrinho - ${convertReal(item.preco)}`}
                styleButton={{
                  $width: '21.8rem',
                  $height: '2.4rem',
                  $padding: '.4rem 0.695rem',
                  $color: 'primary',
                  $backgroundColor: 'primary',
                }}
                onClick={handleCart}
              />
            </div>
          </S.Item>
        </>
      </Modal>
    </>
  ) : (
    <Cart status={setModalDish} />
  );
};
export { ModalDish };
