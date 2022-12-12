import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import { ROUTES } from './constants/routes';
import Canada from './routes/Canada/Canada';
import Home from './routes/Home/Home';
import NoMatch from './routes/NoMatch/NoMatch';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CANADA} element={<Canada />} />
        <Route path={ROUTES.NO_MATCH} element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
