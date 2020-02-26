import React from "react";
import ContactForm from "./ContactForm";

function FormContainer() {
    return(
        <div className="wrapper-form">
            <div className="form-content">
                <h3>Need a Project?</h3>
                <p>Let us what're you looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
                <ContactForm/>
            </div>       
        </div>
    )
}

export default FormContainer;