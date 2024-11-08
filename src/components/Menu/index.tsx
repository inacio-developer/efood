import { RootReduceType } from '../../store/rootReduce';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeAll } from '../../features/cartSlice';
import { Button } from './styles';
import { Cart } from '../Cart';

type PropsMenu = {
  children: JSX.Element;
};

const Menu = ({ children }: PropsMenu) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state: RootReduceType) => state.cart.count);
  const [modal, setModal] = useState(false);

  const returnHome = () => {
    dispatch(removeAll());
    navigate('/');
  };

  const openCartModal = () => {
    setModal(true);
  };

  return (
    <>
      <Button onClick={returnHome}>Restaurantes</Button>
      {children}
      <Button onClick={openCartModal}>{count} produto(s) no carrinho</Button>
      {modal && <Cart status={setModal} />}
    </>
  );
};

export { Menu };
