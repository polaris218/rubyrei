import React from 'react';
import styled from "styled-components";

const Paragraph = styled.p`
    font-size: 1em;
    line-height: 2em;
`;

const ParagraphXs = styled(Paragraph)`
    font-size: 0.9em;
`;

export default (props) => (props.xs ? 
    <ParagraphXs>{props.children}</ParagraphXs> :
    <Paragraph>{props.children}</Paragraph>
);