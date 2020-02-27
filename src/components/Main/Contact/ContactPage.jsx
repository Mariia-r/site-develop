import React from "react";
import css from "./ContactPage.module.css";
import FormContainer from "../LandingPage/componentsLandingPage/ContactForm/FormContainer";
import Contact from "./Contact";

function ContactPage() {
    return(
        <div className={css.contactPage}>
            <Contact/>
            <div className={css.wrapperFormContainer}>
                <FormContainer/>
            </div>
        </div>
    )
}

export default ContactPage;