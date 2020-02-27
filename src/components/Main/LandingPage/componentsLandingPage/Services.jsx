import React from "react";
import {GiCutDiamond, GiCrossbow, GiGamepad} from "react-icons/gi";
import {FaMobileAlt, FaPlaneDeparture, FaFillDrip} from "react-icons/fa";
import {IoIosStarOutline} from "react-icons/io";
import {GiFairyWand} from "react-icons/gi";

function Services() {
    return(
        <div className="wrapper-unitsProcess" id="services"> {/*do*/}
            <div className="unit-process">
                <div><GiCutDiamond size={'3em'}/></div>
                <div>
                    <b>UI / UX DESIGN</b>
                    <div>Be set fourth land god darkness make it wherein own</div>
                </div>
            </div>
            <div className="unit-process">
                <div><GiCrossbow size={'3em'}/></div>
                <b>WEB DEVELOPMENT</b>
                <div>Be set fourth land god darkness make it wherein own</div>
            </div>
            <div className="unit-process">
                <div><FaMobileAlt size={'3em'}/></div>
                <b>APP/MOBILE</b>
                <div>Dominion man second spirit he, earth they're creeping</div>
            </div>
            <div className="unit-process">
                <div><GiGamepad size={'3em'}/></div>
                <b>GAME DESIGN</b>
                <div>Morning this saying moveth it multiply appear life be</div>
            </div>
            <div className="unit-process">
                <div><FaPlaneDeparture size={'3em'}/></div>
                <b>SEO/MARKETING</b>
                <div>Give won't after land fill creeping meet you, may</div>
            </div>
            <div className="unit-process">
                <div><IoIosStarOutline size={'3em'}/></div>
                <b>PHOTOGRAPHY</b>
                <div>Creepeth one seas cattle grass give moving saw give</div>
            </div>
            <div className="unit-process">
                <div><GiFairyWand size={'3em'}/></div>
                <b>GRAPHIC DESIGN</b>
                <div>Open, great whales air rule for, fourth life whales</div>
            </div>
            <div className="unit-process">
                <div><FaFillDrip size={'3em'}/></div>
                <b>ILLUSTRATIONS</b>
                <div>Whales likeness hath, man kind for them air two won't</div>
            </div>
        </div> 
    )
}

export default Services;