import React from "react";
import { connect } from "react-redux";
import { TiEyeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

class Projects extends React.Component {
    render(){
        return (
            <div className="wrapper-projects" id="projects">
                {this.props.projects.map((item, i) => {
                    return <Link key={i}
                                 to={`/projects/${item.projectId}`}
                                 className="block-project" 
                                 style={
                                    {"background": `url(${item.images[0]}) 50% 50% no-repeat`,
                                     "backgroundSize": "cover"}
                                }       
                            >
                                <span className="project_icon-eye"><TiEyeOutline size={50}/></span>
                            </Link>
                })}
                <input type="button" value="Load more work" style={{"width": "100%"}}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    projects: state.projects.projects
})

export default connect(mapStateToProps, {})(Projects);