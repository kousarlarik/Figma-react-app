
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Header from './components/header/header';
import { HeroSection } from './components/heroSection/heroSection';

function App() {
  return (
   <>
    <Header/>
    <HeroSection/>
   </>
   
  );
}

export default App;
