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
    <AppleStoreWrapper href="https://apps.apple.com/app/id1438103745">&nbsp;</AppleStoreWrapper> 
    : 
    <GooglePlayWrapper href="https://play.google.com/store/apps/details?id=com.wibbu.rubyrei.schoolversion">&nbsp;</GooglePlayWrapper>
);