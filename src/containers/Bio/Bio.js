import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SectionTitle, SectionContent, H1Title,NormalParagraph, HContainer, VContainer, LinkBtn} from '../../components/index';
import classes from './Bio.css';
import {bio} from '../../data/bio';


function Bio() {
    return (
        <div className={classes.Bio}>
            <SectionTitle rotate = {1}>
                <h2>About me</h2>
            </SectionTitle>
          
            <SectionContent 
                flexDir="column"
                justifyContent = "start" 
            >
                <H1Title>{bio.title}</H1Title>
                <HContainer>
                    <LinkBtn target="_blank" bgcolor="#1167b1" href={bio.resumeLink}><FontAwesomeIcon size="lg" icon="file-download"/>  My Resumé</LinkBtn>
                    <LinkBtn target="_blank" bgcolor="#03C04A" href={bio.hireMeLink}><FontAwesomeIcon size="lg" icon="thumbs-up"/>  Hire Me</LinkBtn>
                </HContainer>
                <VContainer>
                    {bio.aboutMe.map((paragraph,i) => <NormalParagraph key={i}>{paragraph}</NormalParagraph>)}
                </VContainer>
                
               
            </SectionContent>
        </div>
    )
}

export default Bio;
