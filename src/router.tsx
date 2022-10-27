import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddNewCard from './pages/AddNewCard';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/newcard" element={<AddNewCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
