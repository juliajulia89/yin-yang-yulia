import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/home" component={HomePage} />
      <Footer />
    </div>
  );
}

export default App;
