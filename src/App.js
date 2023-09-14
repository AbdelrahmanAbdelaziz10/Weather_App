import './App.css';
import { BrowserRouter as Router ,Route, Routes  } from 'react-router-dom';
import NavBar from './components/navBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Footer from './components/Footer';
import Weather from './components/weather';
import './components/style/mediaquery.css';
// import WeatherApp from './components/weatherapp/weatherapp';



function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
    <Routes>
    <Route path="/" element={<Weather />}></Route>
    </Routes>
    <Footer />
    </div>
    </Router>

  );
}

export default App;
