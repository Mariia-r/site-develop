import React from "react";
import css from "./ContactPage.module.css";
import ContactForm from "../LandingPage/componentsLandingPage/ContactForm/ContactForm";
import Contact from "./Contact";

function ContactPage() {
    return(
        <div className={css.contactPage}>
            <Contact/>
            <div className={css.wrapperContactForm}>
                <ContactForm/>
            </div>
            <div className={css.contactMap}>
                <iframe width="100%" 
                        height="300px" 
                        src="https://maps.google.com/maps?width=1000&amp;height=440&amp;hl=en&amp;q=New%20York+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0">
                </iframe>
            </div>
        </div>
    )
}

export default ContactPage;