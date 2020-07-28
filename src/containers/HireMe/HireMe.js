import React from 'react';
import classes from './HireMe.css';
import {SectionTitle} from '../../components/index';

function HireMe() {
    return (
        <div className={classes.HireMe}>
             <SectionTitle>
                <h2> Hire Me</h2>
            </SectionTitle>  
            <div>Content</div>
        </div>
    )
}

export default HireMe;
