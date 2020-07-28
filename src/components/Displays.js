import styled from 'styled-components';

export const Badge = styled.span`
    background-color:black;
    color :white;
    padding: 0.3rem;
    box-sizing: border-box;
    border-radius: 0.4rem;
    ${props => props.sizing === "small"? 'font-size: 0.8rem;':'font-size: 1.2rem;'}
`;

export const LinkBtn = styled.a`
    color: white;
    text-decoration: none;
    padding: .3rem;
    border-radius: .25rem;
    background-color: ${props => props.bgcolor? props.bgcolor :'rgba(144,148,156, 1)'};
`;

export const Link = styled.a`
    color: white;
    text-decoration: none;
    background-color: black;
    margin:0;
    padding: .1rem;
`;