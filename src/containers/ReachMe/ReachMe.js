import React from 'react';
import classes from './ReachMe.css';
import {SectionTitle, SectionContent, HContainer, Link} from '../../components/index';
import {reachMe} from '../../data/reachMe';

function ReachMe() {
    return (
        <div className={classes.ReachMe}>
             <SectionTitle rotate={1}>
                <h2> Reach Me</h2>
            </SectionTitle>  
            <SectionContent
                flexDir="column"
                justifyContent = "space-evenly" 
            >
                {reachMe.map((elm, i) => {
                    return (
                        <HContainer key={i}>
                            {elm.icon}
                            <span>{elm.name}</span>
                            <Link target ="_blank" href= {elm.link}>{elm.link}</Link>
                        </HContainer>
                    );
                })}
            </SectionContent>
        </div>
    )
}

export default ReachMe;
