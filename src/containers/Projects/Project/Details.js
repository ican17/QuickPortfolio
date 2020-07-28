import React from 'react';
import styled from 'styled-components';
import {H1Title, H3Title, NormalParagraph, Badge, VContainer, HContainer, Link} from '../../../components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Details.css'

const HeadTtile = styled(H1Title)`
    align-self: center;
`;
function Details(props) {
    return (
        <div className={classes.Details}>
            <HeadTtile>Project Details</HeadTtile>
            <HContainer>
                <H3Title>Title: </H3Title>
                  <H3Title>{props.data.title}</H3Title>
            </HContainer>
            
            <VContainer>
                <H3Title>Description:</H3Title>
                <NormalParagraph>{props.data.longDescription}</NormalParagraph>
            </VContainer>

            <VContainer>
                <H3Title>Techonologies: </H3Title>
                <HContainer>
                    {props.data.technologies.map( (tech,i) => <Badge key={i} sizing="small">{tech}</Badge>)}
                </HContainer>
            </VContainer>
            <VContainer>
                <HContainer><FontAwesomeIcon size="lg" icon={['fab', 'github']} /><H3Title>[Github]:</H3Title><Link href={props.data.githubLink} target ="_blank">{props.data.githubLink}</Link></HContainer>
                <HContainer><FontAwesomeIcon size="lg" icon={['fas', 'link']} /><H3Title>[Demo]:</H3Title><Link href={props.data.demoLink} target ="_blank">{props.data.demoLink}</Link></HContainer>
            </VContainer>
                      
        </div>
    )
}

export default Details;
