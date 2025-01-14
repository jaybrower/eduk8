import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div id="app">
      <header></header>
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
