import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Restaurant } from './pages/Restaurant';
const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id/:name" element={<Restaurant />} />
  </Routes>
);
export { RootRoutes };
