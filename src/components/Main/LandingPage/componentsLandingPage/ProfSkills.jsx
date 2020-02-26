import React from "react";

function ProfSkills() {
    return(
        <div className="wrapper-profSkills">
            <div className="block-profSkills">
                <h3>Professional Skills</h3>
                UI/UX Design 75%      
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                WEB DEVELOPMENT 90%
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                MARKETING 65% 
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{"width": "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export default ProfSkills;