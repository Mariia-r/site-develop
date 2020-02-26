import React from "react";
import {IoIosStarOutline, IoIosHeartEmpty} from "react-icons/io";
import { FaBriefcase } from 'react-icons/fa';
import { WiTime9  } from "react-icons/wi";

function WorkStatistic(props) {
    return (
        <div className="block-statistic">
            <div>
                <div className="wrapper-iconsStatistic"><FaBriefcase size={40}/></div>
                <div className="wrapper-statisticInfo">
                    548
                    <br/>
                    Projects Completed
                </div>
            </div>
            <div>
                <div className="wrapper-iconsStatistic"><WiTime9 size={40}/></div>
                <div className="wrapper-statisticInfo">
                    1465
                    <br/>
                    Working hours 
                </div>
            </div>
            <div>
                <div className="wrapper-iconsStatistic"><IoIosStarOutline size={40}/></div>
                <div className="wrapper-statisticInfo">
                    612
                    <br/>
                    Positive Feedbacks
                </div>
            </div>
            <div>
                <div className="wrapper-iconsStatistic"><IoIosHeartEmpty size={40}/></div>
                <div className="wrapper-statisticInfo">
                    735
                    <br/>
                    Happy Clients
                </div>
            </div>
        </div>
    )
}

export default WorkStatistic;