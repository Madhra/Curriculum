import './App.css';
import Laboral from './components/laboral';
import Escolaridad from './components/escolaridad';
import NavBar from './components/nav-bar';
import SobreMi from './components/sobre-mi';
import Habilidades from './components/habilidades';
import Portafolio from "./components/portafolio";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <SobreMi />
      <Escolaridad />
      <Laboral />
      <Habilidades />
      <Portafolio />
      <Footer />
    </div>
  );
}

export default App;
