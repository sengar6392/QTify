import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import NavBar from './components/navbar/NavBar';
import HeroSection from './components/hero-section/HeroSection';
import CustomCard from './components/card/Card';
import TopAlbums from './components/top-albums/TopAlbums';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <TopAlbums/>
    </div>
  );
}

export default App;
