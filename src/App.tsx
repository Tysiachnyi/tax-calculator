import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './routes/Home/Home';
import NoMatch from './routes/NoMatch/NoMatch';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
