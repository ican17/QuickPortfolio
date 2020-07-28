import React from 'react';
import classes from './Projects.css';
import { SectionTitle, SectionContent } from '../../components/index';
import Project from '../Projects/Project/Project';
import {projects} from '../../data/projects';

function Projects() {
    return (
        <div className={classes.Projects}>
            <SectionTitle rotate={1}>
                <h2> Projects</h2>
            </SectionTitle>
            <SectionContent
                justifyContent = "flex-start"
                wrapping = "wrap"
            >
                {projects.map((project,i) => <Project key={i} data={project}/>)}
               
            </SectionContent>
        </div>
    )
}

export default Projects;
