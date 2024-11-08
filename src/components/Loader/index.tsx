import { SyncLoader } from 'react-spinners';
import { Container } from '../../containers/Default';
const Loader = () => (
  <Container
    styles={{
      $padding: { $top: 8, $bottom: 8 },
      $flex: { $align: 'center', $justifyContent: 'center' },
    }}
  >
    <>
      <SyncLoader color="#e66767" />
    </>
  </Container>
);
export { Loader };
