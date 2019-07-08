import React from "react";
import AppleBadge from "../../assets/img/apple-store-badge.png";
import GoogleBadge from "../../assets/img/google-play-badge.png";
import styled from "styled-components";
import { Media } from "../Utils";

const StoreBadge = styled.a`
    display: inline-block;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: contain;
    width: 50%;
    height: 80px;
    text-decoration: none;
`;

const AppleStoreWrapper = styled(StoreBadge)`
    background-image: url(${AppleBadge});

    ${Media.tablet`
        background-position: right top;
    `}
`;

const GooglePlayWrapper = styled(StoreBadge)`
    background-image: url(${GoogleBadge});

    ${Media.tablet`
        background-position: left top;
    `}
`;

export default (props) => (props.apple ? 
    <AppleStoreWrapper href="#">&nbsp;</AppleStoreWrapper> 
    : 
    <GooglePlayWrapper href="#">&nbsp;</GooglePlayWrapper>
);