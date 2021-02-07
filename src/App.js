import './App.css';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Home from './components/Home/Home';
import {TrackDocument, Track} from 'react-track';
import {topTop} from 'react-track/tracking-formulas';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
    </div>
  );
}

export default App;

// import {TrackDocument, Track} from 'react-track';
// import {topTop} from 'react-track/tracking-formulas';


//   <TrackDocument formulas={[topTop]}>
  // {topTop =>

  //   <Track component="h2" formulas={[topTop]}>
  //   {(H2,posTopTop) =>
  //     <H2>My top is {posTopTop}px from the viewport's top.</H2>
  //   }</Track>

//   }</TrackDocument>
