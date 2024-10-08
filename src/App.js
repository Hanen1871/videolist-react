import './App.css';
import MainVideo from './components/MainVideo';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Suggestions from './components/Suggestions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbarr /> 
     <div className='contain'>
      <MainVideo/> 

     <Suggestions />
     </div>
    </div>
  );
}

export default App;
