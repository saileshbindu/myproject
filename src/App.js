import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/heroSection/Herosection';
import Section from './components/section/Section';
import Songs from './components/songs/Songs';
// import Faqs from './components/faqs/Faqs';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <HeroSection />
       <Section />
       <Songs />
       {/* <Faqs/> */}
       
    </div>
  );
}

export default App;
