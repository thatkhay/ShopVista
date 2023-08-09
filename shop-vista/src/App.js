import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/"  element={<Home/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
