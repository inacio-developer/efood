import { Menu } from './typeMenu';

export type Restaurant = {
  avaliacao: number;
  capa: string;
  cardapio: Menu[];
  descricao: string;
  destacado: boolean;
  id: number;
  tipo: string;
  titulo: string;
};
