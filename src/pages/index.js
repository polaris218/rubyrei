import React from "react";
import styled from "styled-components";
import reset from "normalize.css";
import { Media } from "../components/Utils";
import { Header } from "../components/Typography";
import { Body } from "../components/Typography";
import Background from "../assets/img/jungle-bg.jpg";
import { createGlobalStyle } from "styled-components";
import SiteHeader from "../components/SiteHeader";
import SectionWrapper from "../components/SectionWrapper";
import SiteFooter from "../components/SiteFooter";
import Palette from "../components/Palette";
import StoreBadge from "../components/StoreBadge";
import CambridgeLogos from "../assets/img/cambridge-logos.png";
import WibbuLogo from "../assets/img/wibbu-logo.png";
import RubyFigureImg from "../assets/img/ruby-figure.png";
import DownloadAppCta from "../components/DownloadAppCta";
import { WibbuBtn } from "../components/Buttons";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:600,700&display=swap');

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        color: #f2f2f2;
        background-color: #0d252d;
    }

    img {
        width: 100%;
        height: auto;
    }

    a {
        color: ${Palette.SandYellow}
    }
    a:visited {
        text-decoration: none;
        // color: ${Palette.SandYellow}
    }

    a:hover {
        color: ${Palette.SandYellow}
    }
`;

const SiteWrapper = styled.div`
    ${Media.desktop`
        display: block;
        overflow: hidden;
        max-width: 1440px;
        margin: 0 auto;
        position: relative;
        box-shadow: 0px 0px 50px 4px rgba(0,0,0,.2);
    `}
`;

const MainWrapper = styled.div`
    display: block;
    overflow: hidden;
    background: ${Palette.MidnightGreen} url(${Background}) center top no-repeat; 
    background-size: 220%;
    padding: 0;
    margin: 0;

    ${Media.tablet`
        background-size: cover;
        background-position: center 50%;
        min-height: 80vh;
    `}
`;

const HeroBlock = styled.div`
    display: block;
    overflow: hidden;
    text-align: center;

    .zoom {
    transition: transform .125s;
    }
          
    .zoom:hover {
            -ms-transform: scale(1.1); /* IE 9 */
            -webkit-transform: scale(1.1); /* Safari 3-8 */
            transform: scale(1.1);
            text-decoration: none;
    }

    ${Media.tablet`
        padding-bottom: 80px;
    `}

    h1 {
        font-size: 1.2em;
        margin-top: 32px;
        margin-bottom: 32px;

        ${Media.tablet`
            display: block;
            font-size: 1.5em;
            max-width: 500px;
            margin: 0 auto;
            margin-top: 64px;
            margin-bottom: 64px;
        `}

        ${Media.desktop`
            max-width: 700px;
        `}
    }

    .store-badges {
        ${Media.tablet`
            display: none;
        `}
    }

    .desktop-ctas {
        display: none;

        ${Media.tablet`
            display: block;
            overflow: hidden;
            margin-bottom: 32px;

            & > a {
                display: inline-block;
                width: 228px;
                height: 61px;

                &:first-child { margin-right: 8px; }
                &:last-child { margin-left: 8px; }
            }
        `}
    }

    .pub-logos {
        display: block;
        overflow: hidden;
        margin-top: 40px;
        margin-bottom: 24px;

        .cambridge-logos {
            max-width: 260px;
        }

        .wibbu-logos {
            max-width: 60px;
        }

        ${Media.tablet`
            position: relative;
            height: 8em;
            max-width: 50%;
            margin: 0 auto;
            margin-top: 32px;

            .centered {
                display: flex;
                position: absolute;
                top: 0;
                left: 50%;
                margin-right: -50%;
                transform: translateX(-50%);

                p:first-child {
                    margin-top: 8px;
                }
            }

            .cambridge-logos {
                margin-right: 56px;
                max-width: 300px;
            }
    
            .wibbu-logos {
                max-width: 100px;
            }
        `}
    }
`;

const RubyFigure = styled.div`
    display: none;

    ${Media.tablet`
        display: block;
        position: absolute;
        bottom: 35%;
        right: 56px;
        background: transparent url(${RubyFigureImg}) center top no-repeat;
        background-size: contain;
        width: 200px;
        height: 300px;
    `}
    
    ${Media.desktop`
        right: 96px;
        width: 200px;
        height: 500px;
    `}
`;

export default () => (
    <React.Fragment>
        <GlobalStyle />
        <SiteWrapper>
            <MainWrapper>
                <SiteHeader />
                <div id="site-content">
                    <SectionWrapper>
                        <HeroBlock id="hero">
                            <Header color={Palette.SandYellow}>An innovative digital language-learning adventure<br/>for upper-primary level learners</Header>
                            <div className="desktop-ctas">
                                <DownloadAppCta/>
                                <WibbuBtn className="cta-pdf zoom" color="dark" href="#">Worksheets (PDF)</WibbuBtn>
                            </div>
                            <div className="store-badges">
                                <StoreBadge apple/>
                                <StoreBadge google/>
                            </div>
                            <Body xs>FUN with Ruby Rei is currently available in <b>Turkey</b> and <b>Mexico</b>.
                            <p>If you’d like to find out more about Ruby Rei for your country, please <a href="https://www.cambridge.org/cambridgeenglish/contact" target="_blank">contact your local Cambridge representative</a>.</p>
                            </Body>
                            <div className="pub-logos">
                                <div className="centered">
                                    <p><img className="logo cambridge-logos" src={CambridgeLogos} alt="Cambridge University Press logo"/></p>
                                    <p><img className="logo wibbu-logos" src={WibbuLogo} alt="Wibbu logo"/></p>
                                </div>
                            </div>
                            <RubyFigure/>
                        </HeroBlock>
                    </SectionWrapper>
                </div>
            </MainWrapper>
            <SiteFooter />
        </SiteWrapper>
    </React.Fragment>
);
