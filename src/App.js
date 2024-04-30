import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/heroSection/Herosection';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <HeroSection />
       <Cards/>
       
    </div>
  );
}

export default App;
