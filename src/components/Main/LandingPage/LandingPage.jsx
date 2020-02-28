import React from "react";
import { Link } from "react-router-dom";
import Projects from "./componentsLandingPage/Projects/Projects";
import WorkProcess from "./componentsLandingPage/WorkProcess";
import WorkStatistic from "./componentsLandingPage/WorkStatistic";
import ControlledCarousel from "./componentsLandingPage/Slider";
import LogoClients from "./componentsLandingPage/LogoClients";
import FormContainer from "./componentsLandingPage/ContactForm/FormContainer";
import Services from "./componentsLandingPage/Services";
import ProfSkills from "./componentsLandingPage/ProfSkills";

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper-descriptionBlock">
                    <div className="descriptionBlock">
                        <h2>We Design and Develop</h2>
                        <p>
                            We are a new design studio based in USA. We have over 
                            
                            20 years of combined experience, and know a thing or two
                            
                            about designing websites and mobile apps. 
                        </p>
                        <button type="button"><Link className="linkBtn" to="/contact">CONTACT US</Link></button>
                    </div>

                </div>


                <div className="aboutUs">
                    <h3>About us</h3>
                    <div>
                        <p>
                            Divide have don't man where in air fourth. Own itself make have night w'ont make. 
                            A you under seed appear which good give. Own give air without fowl moveth dry first
                            heaven fruit, dominion, she'd won't very all.
                        </p>
                        <div>
                            <img src="http://placehold.it/250x50?text=Significante" alt=""/>
                        </div>  
                    </div>
                </div>

                <ProfSkills/>

                <WorkStatistic/>

                <Projects/>

                <WorkProcess/>

                <Services/>

                <ControlledCarousel/>

                <LogoClients/>    
  
                <FormContainer/>                 
            </div>
        )
    }
}

export default LandingPage;