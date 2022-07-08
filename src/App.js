import './App.css';
import Home from './containers/Home';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<div>About</div>} />
      </Routes>
    </>
  );
}

export default App;
