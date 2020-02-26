import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProjectContainer extends React.Component {
    render() {
        const projectId= this.props.match.params.projectId;
        const project = this.props.projects.find(project => project.projectId == projectId);

        return (<div>
            id: {project.data} 
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects.projects
});

export default compose(connect(mapStateToProps, {}),withRouter)(ProjectContainer);