import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
