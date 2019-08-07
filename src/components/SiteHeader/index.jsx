import React from "react";
import Logo from "../../assets/img/fun-ruby-logo.png";
import styled from "styled-components";
import { Media } from "../Utils";

const Header = styled.header`
    display: block;
    padding-top: 16px;
    padding-bottom: 0px;
    overflow: hidden;
`;

const LogoWrapper = styled.a`
    display: block;
    width: 150px;
    margin: 0 auto;
    margin-top: 100px;

    ${Media.desktop`
        width: 250px;
    `}

    ${Media.tablet`
    width: 200px;
`}
`;

export default (props) => (
    <Header id="site-header">
        <LogoWrapper className="logo" href="#">
            <img src={Logo} alt="Fun with Ruby Rei"/>
        </LogoWrapper>
    </Header>
);