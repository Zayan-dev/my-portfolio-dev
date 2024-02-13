import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Project></Project>
    <Footer></Footer>
    </>
  );
}

export default App;
