import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import {Fragment} from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let hidden = {"display" : "none"};
        let show ={"display" : "flex"};
        return (
            <header className="App-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="http://placehold.it/40x40?text=Logo" alt=""/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/projects" className="nav-link">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">ABOUT</Link>
                                </li>

                                <ul className="navbar-nav"
                                    style={this.props.location.pathname !== '/' ? hidden : show }> 
                                     
                                    <li className="nav-item">
                                        <a href="#projects" className="nav-link">PROJECTS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#process" className="nav-link">PROCESS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#services" className="nav-link">SERVICES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
                                    </li>
                                </ul>

                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);