import React from 'react';
import styled from 'styled-components';
import classes from './Skills.css';
import {SectionTitle, SectionContent, Badge} from '../../components/index';
import {skills} from '../../data/skills';


function Skills() {
    return (
        <div className={classes.Skills}>
            <SectionTitle rotate={1}>
                <h2> Skills</h2>
            </SectionTitle>
            <SectionContent
                alignItems = "start"
                wrapping = "wrap"
            >
                {skills.map((skill, i) => <Badge key={i} >{skill}</Badge>)}
        
            </SectionContent>
        </div>
    )
}

export default Skills;
