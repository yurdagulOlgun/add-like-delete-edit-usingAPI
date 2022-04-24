import "./App.css";
import NavBar from "./components/base/NavBar";
import Footer from "./components/base/Footer";
import {Routes, Route} from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    
      <div className="App">
        <NavBar />
        <Routes>
          {
            routes.map((item,index) => <Route key={index} path={item.path} element={<item.element />} />)
          }
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
