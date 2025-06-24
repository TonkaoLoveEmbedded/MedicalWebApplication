import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Detect from './Detect';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detect" element={<Detect />} />
    </Routes>
  </HashRouter>
)
