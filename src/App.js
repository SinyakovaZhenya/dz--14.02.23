import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import City from "./pages/City";
import Difference from "./pages/Difference";
import Attractions from "./pages/Attractions";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
				<Nav/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/city" element={<City/>}/>
					<Route path="/difference" element={<Difference/>}/>
					<Route path="/attractions" element={<Attractions/>}/>
					<Route path="/gallery" element={<Gallery/>}/>
				</Routes>
			</Router>
    </div>
  );
}

export default App;
