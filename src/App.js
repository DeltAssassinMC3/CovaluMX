import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Contacttable from "./components/Contact/Contacttable";
import Footer from "./components/Footer/Footer";
import "./App.css";
// import abc from "./components/login/login"

const App = () => {
  return (
    <Router>
      <div className="Container">
     
          <Route path="/" exact>
            <Preloader />
            <Navbar />
            <Header />
            <Hero />
            <Portfolio />
            <Services />
            <Contact />
            <Contacttable />
            <Footer />
          </Route>

      </div>
    </Router>
  );
};
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
