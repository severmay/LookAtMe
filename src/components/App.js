import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import Gallery from './Gallery';
import Skills from './Skills';
import Experience from './Experience';

export default class App extends Component {

    componentDidUpdate(prevProps) {
        const {history} = this.props;
        let location = history.location.pathname;
        // if (location !== prevProps.history.location.pathname) {
            location = location.replace('/', '');
            if (location) {
                document.getElementById(location).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                document.getElementById('home').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        // }

    }

    render() {
        return <Fragment>
            <Home/>
            <Experience/>
            <Skills/>
            <Gallery/>
        </Fragment>
    }
}

App.propTypes = {
    history: PropTypes.any,
    location: PropTypes.any,
};

