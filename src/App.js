import './App.css';

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Details from "./component/Details";
import About from './component/About';
import Gallery from './component/Gallery';
import { Upcoming } from './component/Upcoming';
import Map from './component/Map';
import Footer from "./component/Footer";
import Team from "./component/Team"
import Achievement from './component/Achievments';



export default function App() {

  return (

    <div className="App">
      <Navbar />
      <Home />
      <Details />
      <About />
      <Gallery />
      <Upcoming />
      <Achievement />
      <Team />
      <Map />
      <Footer />


    </div>
  );


}


