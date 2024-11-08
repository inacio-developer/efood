import { Container } from '../../containers/Default';
import { Cards } from '../../components/Cards';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { Layer } from '../../components/Layer';
import { Restaurant as TypeRestaurant } from '../../model/typeRestaurant';
import { useGetRestaurantIDQuery } from '../../services/api';
import { useParams } from 'react-router-dom';

const Restaurant = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading } = useGetRestaurantIDQuery(Number(id));

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <Hero type="Restaurant" />
          <Layer {...(data as TypeRestaurant)} />
          <Container styles={{ $padding: { $top: 5.6, $bottom: 12 } }}>
            <Cards dataMenu={data?.cardapio} />
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export { Restaurant };
