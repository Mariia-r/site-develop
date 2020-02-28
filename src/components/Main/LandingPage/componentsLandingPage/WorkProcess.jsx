import React from "react";
import * as imageForVideo from "../../../../assets/images/posterForVideo.jpg"

function WorkProcess () {
    return (<div id="process">
                <div className="wrapper-workProcess">
                    <div>
                        <h3>OUR WORK PROCESS</h3>
                        <p>
                            Was years it seasons was there form he in in them together over that, third sixth gathered female creeping bearing behold years.
                        </p>
                    </div>

                    <div>
                        <video controls="controls" poster={imageForVideo}>
                            <source src="https://player.vimeo.com/external/157269921.sd.mp4?s=248933ebf8ac192546c330a17844c71762d73c5f&profile_id=164" type="video/mp4"/>
                        </video>
                    </div> 
                </div>
            </div>
    )
}

export default WorkProcess;