import { Routes, Route } from 'react-router-dom';
import Detect from './Detect';
import Home from './BoneHome'; // หรือจะให้ App เป็น Home ก็ได้
import BoneHome from './BoneHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BoneHome />} />
      <Route path="/detect" element={<Detect />} />
    </Routes>
  );
}

export default App;
