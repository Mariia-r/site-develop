import React from "react"
import img from "../../assets/images/image.jfif";
import css from "./Resume.module.css";

class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                Mariia Riabtsun
                <div className={css.myPhotoWrapper}><img src={img} className={css.myPhoto}/></div>
                <div>
                    <p>Date of birth: 14 July, 1993</p>
                    <p>Residence: Kyiv </p>
                    <p>Contact Information</p>
                    <p>Mobile: + 38 (063) 675 68 90</p>
                    <p>E-mail: mariya.ryabtsun@gmail.com</p>
                    <p>Skype: mari_579111</p>
                    <p>GitHub: https://github.com/Mariia-r</p>
                    <p>Bitbucket: https://bitbucket.org/mariia_rv/</p>
                </div>
            </div>
        )
    }
}

export default Resume;