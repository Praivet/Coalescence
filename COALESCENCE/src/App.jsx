import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Ai from './pages/ai/Ai';
import Research from './pages/research/Research';
import History from './pages/history/History';
import Tomorrow from './pages/tomorrow/Tomorrow';
import Forum from './pages/forum/Forum';

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
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;