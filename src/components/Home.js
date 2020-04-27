import React from 'react';

class Home extends React.Component {

    render() {
        return <div id="home" className="page-container">
            {/*<div className="fading_border"></div>*/}
            <span className="page_bottom">
                {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5C0053" fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,64C480,96,600,160,720,208C840,256,960,288,1080,272C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5C0053" fillOpacity="1" d="M0,0L60,32C120,64,240,128,360,176C480,224,600,256,720,272C840,288,960,288,1080,266.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </span>
        </div>
    };
}

export default Home;