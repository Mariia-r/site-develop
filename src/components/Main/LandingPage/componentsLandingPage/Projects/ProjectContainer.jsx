import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import css from "./Project.module.css";

class ProjectContainer extends React.Component {
    
    render() {
        const projectId= this.props.match.params.projectId;
        const project = this.props.projects.find(project => project.projectId == projectId);

        return (
        <section className={css.projectPage}>
            <div className={css.wrapperProject}>
                <div className={css.projectInfo}>
                    <h4>{project.name}</h4>
                    id: {project.data}
                </div>
                <div>
                    <img src={project.images[0]} alt="image project"/>
                </div>
            </div>
            <div className={css.controlsProjects}>
                Buttons for change project
            </div>       
        </section>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects.projects
});

export default compose(connect(mapStateToProps, {}),withRouter)(ProjectContainer);