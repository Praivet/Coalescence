import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Ai from './pages/ai/ai';
import Research from './pages/research/research';
import History from './pages/history/history';
import Tomorrow from './pages/tomorrow/tomorrow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/research" element={<Research />} />
        <Route path="/history" element={<History />} />
        <Route path="/tomorrow" element={<Tomorrow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;