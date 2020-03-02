import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/Main/LandingPage/LandingPage";
import { Switch, Route } from 'react-router-dom';
import ProjectContainer from "./components/Main/LandingPage/componentsLandingPage/Projects/ProjectContainer";
import Home from "./components/Main/Home/Home";
import ContactPage from './components/Main/Contact/ContactPage';
import AboutPage from './components/Main/AboutPage/AboutPage';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className="App-main">      
        <Switch>    
          <Route path="/projects" exact component={Home}/>
          <Route path="/projects/:projectId" component={ProjectContainer}/> 

          <Route path="/about" component={AboutPage}/>
          <Route path="/contact" component={ContactPage}/>

          <Route path="/" exact component={LandingPage}/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;