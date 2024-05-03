import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/heroSection/Herosection';
import Cards from './components/cards/Cards';
import Songs from './components/songs/Songs';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <HeroSection />
       <Cards/>
       <Songs />
       
    </div>
  );
}

export default App;
