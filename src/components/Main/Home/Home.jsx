import React from "react";
import Projects from "../LandingPage/componentsLandingPage/Projects/Projects";
import css from "./Home.module.css";

function Home() {
    return(
        <div>
            <div className={css.pageAboutText}>
                <h3>UI / UX &amp; Graphic Designer</h3>
                <div>I am a Graphic &amp; Web Designer based in New York, specializing in User Interface Design and Development</div>
            </div>
            <Projects page="home"/>
        </div>
    )
}

export default Home;