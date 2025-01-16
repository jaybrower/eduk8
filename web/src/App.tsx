import { Routes, Route } from 'react-router';
import { Home } from './pages';
import { Header, Footer } from './elements';
import './App.css';

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
