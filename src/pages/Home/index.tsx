import { Hero } from '../../components/Hero';
import { Footer } from '../../components/Footer';
import { Cards } from '../../components/Cards';
import { Container } from '../../containers/Default';
import { useGetRestaurantQuery } from '../../services/api';
import { Restaurant } from '../../model/typeRestaurant';

const Home = () => {
  const { data, isLoading } = useGetRestaurantQuery();

  return (
    <>
      <Hero type="Home" />
      <Container styles={{ $padding: { $top: 8, $bottom: 12 } }}>
        {isLoading ? <></> : <Cards dataRest={data as Restaurant[]} />}
      </Container>
      <Footer />
    </>
  );
};

export { Home };
