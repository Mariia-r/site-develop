import React from "react";
import css from "./ContactPage.module.css";

function Contact() {
    return(
        <div className={css.blockContacts}>
            <h4>Contact Info:</h4>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eum illo vel expedita magni magnam sint voluptatem ducimus cumque quae veritatis odit quod minus.
            </p>
            <div>
                <div className={css.itemContact}>
                    <span>
                        <span className={css.itemContactName}>Address:</span> 
                        14567, str. Like, 5, NY
                    </span>
                </div>
                <div className={css.itemContact}>
                    <span>
                        <span className={css.itemContactName}>Phone:</span> 
                        +44 789 567 89 00 
                    </span>
                </div>
                <div className={css.itemContact}>
                    <span>
                        <span className={css.itemContactName}>Email:</span> 
                        info@example.com
                    </span>
                </div>
                <div className={css.itemContact}>
                    <span>
                        <span className={css.itemContactName}>Fax:</span> 
                        +44 789 567 89 01
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact;