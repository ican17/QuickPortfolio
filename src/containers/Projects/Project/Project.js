import React, { useState } from 'react';
import styled from 'styled-components';
import classes from './Project.css';
import withModal from '../../../hoc/withModal';
import Details from './Details';



const MoreDetails = styled.div`
    transition: .5s ease;
    background-color: rgba(144,148,156, ${props => props.isHover ? '0.1' : '1'});
    position: relative;
    width: 100%;
    height: 100%;
    border-radius : 0.3rem;
    display:flex;
    flex-direction: column;
    padding: 0.2rem;
    justify-content: space-evenly;
    align-items:center;
    box-sizing: border-box;
    button{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        visibility:${props => props.isHover ? 'visible' : 'hidden'};
        background-color: black;
        color:white;
        border:none;
        padding:0.3rem;
        border-radius : 0.3rem;
    }
`;

const ProjectTitle = styled.h3`
    margin:0;
    padding: 0;
`;

const ProjectDescription = styled.p`
    margin:0;
    padding:0;
    text-align: center;
`;



function Project(props) {
    const [hover, setHover] = useState(false);
    const mouseOverHandler = () => {
        setHover(true);
    }
    const mouseLeaveHandler = () => {
        setHover(false);
    }
    const details = <Details data = {props.data}
    />
    return (
        <div className={classes.Project}>
            
            <MoreDetails isHover={hover ? 1 : 0}
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}
            >
                <ProjectTitle>{props.data.title}</ProjectTitle>
                <ProjectDescription>{props.data.shortDescription} </ProjectDescription>
                <button onClick = {() => props.show(details)}> More Details</button>
            </MoreDetails>
        </div>
    )
}

export default withModal(Project);
