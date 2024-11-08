import { Menu } from '../../model/typeMenu';
import { ModalDish as Modal } from '../ModalDish';
import { useState } from 'react';
import { Button } from '../Button';
import * as S from './styles';

const Dish = (menu: Menu) => {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <S.Img src={menu.foto} />
      <div>
        <S.Title>{menu.nome}</S.Title>
        <S.Text>{menu.descricao}</S.Text>
        <Button
          onClick={toogleModal}
          text="Mais detalhes"
          styleButton={{
            $width: '100%',
            $height: '2.4rem',
            $padding: '0.4rem',
            $align: 'center',
            $color: 'primary',
            $backgroundColor: 'primary',
          }}
        />
      </div>
      {modal && <Modal item={menu} state={modal} onAction={toogleModal} />}
    </>
  );
};

export { Dish };
