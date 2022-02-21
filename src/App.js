import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import YinYoga from "./pages/YinYoga";
import YinYogaSchedule from "./pages/YinYogaSchedule";
import HolisticTreatment from "./pages/HolisticTreatment";
import YinYogaVideos from "./pages/YinYogaVideos";
import Events from "./pages/Events";
import EventsHikes from "./pages/EventsHikes";
import EventsWorkshops from "./pages/EventsWorkshops";
import EventsRetreats from "./pages/EventsRetreats";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/yinyoga" component={YinYoga} />
      <Route exact path="/yinyoga/schedule" component={YinYogaSchedule} />
      <Route exact path="/holistictreatment" component={HolisticTreatment} />
      <Route exact path="/yinyogavideos" component={YinYogaVideos} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/hikes" component={EventsHikes} />
      <Route exact path="/events/workshops" component={EventsWorkshops} />
      <Route exact path="/events/retreats" component={EventsRetreats} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
