import React from 'react';
import styled from "styled-components";

const H1 = styled.h1`
    font-size: 1.5em;
    color: ${props => props.color || ''};
    line-height: 1.8em;
`;

export default (props) => {
    var { type } = props;
    var text = props.children;
    
    var titleTag = <H1 {...props}>{text}</H1>
    
    if(!type === 'h2')
        titleTag = <h2>{text}</h2>;

    if(!type === 'h3')
        titleTag = <h3>{text}</h3>;

    if(!type === 'h4')
        titleTag = <h4>{text}</h4>;

    if(!type === 'h5')
        titleTag = <h5>{text}</h5>;

    if(!type === 'h6')
        titleTag = <h6>{text}</h6>;

    return( titleTag );
}