import React from 'react';
import Bio from './containers/Bio/Bio';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import ReachMe from './containers/ReachMe/ReachMe';
//import HireMe from './containers/HireME/HireMe';
import classes from './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faYoutube, faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { fas, faFileDownload , faThumbsUp, faLink} from '@fortawesome/free-solid-svg-icons'


library.add(fab, fas, faFileDownload, faThumbsUp, faYoutube, faLinkedin, faGithub, faLink);




function App() {
    return (
        <div className={classes.App}>
            <Bio />
            <Skills/>
            <Projects/>
            <ReachMe/>
        </div>
    )
}

export default App;
