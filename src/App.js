import './App.css';
import NavBar from './components/base/NavBar';
import Footer from './components/base/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
