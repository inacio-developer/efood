import { Menu as TypeMenu } from '../../model/typeMenu';
import { Restaurant as TypeRestaurant } from '../../model/typeRestaurant';
import { Cards as List } from '../../containers/Cards';
import { Card as Item } from '../../containers/Card';
import { Restaurant } from '../CardRestaurant';
import { Dish } from '../CardDish';
type CardProps = {
  dataRest?: TypeRestaurant[];
  dataMenu?: TypeMenu[];
};
const Cards = ({ dataRest, dataMenu }: CardProps) => {
  const data = dataRest ? dataRest : dataMenu;
  const grid = dataRest ? 'Restaurant' : 'Dish';
  const Component = (): JSX.Element => {
    return (
      <List grid={grid}>
        {(data as TypeRestaurant[] | TypeMenu[]).map(element =>
          dataRest ? (
            <Item type={'Restaurant'} key={element.id}>
              <Restaurant {...(element as TypeRestaurant)} />
            </Item>
          ) : (
            <Item type={'Dish'} key={element.id}>
              <Dish {...(element as TypeMenu)} />
            </Item>
          ),
        )}
      </List>
    );
  };
  return Component();
};
export { Cards };
