import React from "react";
import css from "./AboutPage.module.css"
import WorkStatistic from "../LandingPage/componentsLandingPage/WorkStatistic";
import { Link } from "react-router-dom";

class AboutPage extends React.Component {
    render() {
        return (
            <section>
                <div className={css.introduce}>
                    <h1>Amelia Woods</h1>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </div>
                </div>
                <WorkStatistic/>
                <div className={css.wrapperAboutMe}>
                    <article className={css.aboutMe}>
                        <h3>About me</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa adipisci minus odit inventore.</p>
                        <p>Enim sunt maxime at a quaerat eveniet beatae mollitia commodi provident deleniti aperiam, aspernatur fugiat illo iusto.</p>
                        <div>
                            <img src="http://placehold.it/250x50?text=Signature" alt=""/>
                        </div> 
                    </article>
                </div>
                <div className={css.toContact}>
                    <h3>Need a Project?</h3>
                    <p>Let us what're you looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
                    <button type="button"><Link to="/contact">LET'S TALK</Link></button>
                </div>
            </section>
        )
    }
}

export default AboutPage;