import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import reset from "normalize.css";
import i18n from "i18next";

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
    transition: transform 0.125s;
  }

  .zoom:hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
    text-decoration: none;
  }

  .video {
    display: block;
    width: 224px;
    height: 176px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    box-shadow: 1px 1px 10px #000000aa;

    ${Media.tablet`
        display: block;
        width: 448px;
        height: 252px;
        margin-top: -32px;
        margin-bottom: 50px;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 2px 2px 10px #000000AA;
        `}

    ${Media.desktop`
            display: block;
            width: 560px;
            height: 315px;
            margin-top: -32px;
            margin-bottom: 50px;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 2px 2px 10px #000000AA;
        `}
  }

  ${Media.tablet`
        padding-bottom: 80px;
    `}

  h1 {
    font-size: 1.2em;
    margin-top: 32px;
    margin-bottom: 40px;

    ${Media.tablet`
            display: block;
            font-size: 1.3em;
            max-width: 500px;
            margin: 0 auto;
            margin-top: 32px;
            margin-bottom: 40px;
        `}

    ${Media.desktop`
            max-width: 700px;
            font-size: 1.5m;
        `}
  }

  .store-badges {
    display: block;
    overflow: hidden;
    margin-bottom: 16px;

    & > a {
      display: inline-block;
      width: 228px;
      height: 80px;

      &:first-child {
        margin-right: 8px;
      }
      &:last-child {
        margin-left: 8px;
      }
    }
    ${Media.tablet`
            display: none;
        `}
  }

  .desktop-ctas {
    ${Media.tablet`
            display: inline-flex;
            overflow: hidden;
            margin-bottom: 80px;

            & > a {
                display: inline-block;
                width: 228px;
                height: 61px;

                &:first-child { margin-right: 8px; }
                &:last-child { margin-left: 8px; }
            }

            .dark-text {
                color: black;
            }
        `}
  }

  .mobile-ctas {
    display: block;
    overflow: hidden;
    margin-bottom: 32px;

    & > a {
      display: inline-block;
      width: 228px;
      height: 61px;

      &:first-child {
        margin-right: 8px;
      }
      &:last-child {
        margin-left: 8px;
      }
    }

    .dark-text {
      color: black;
    }

    ${Media.tablet`
            display: none
        `}
  }

  .pub-logos {
    display: block;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 32px;

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
  position: relative;

  ${Media.tablet`
    display: block;
    position: absolute;
    bottom: 35%;
    right: 2%;
    background: transparent url(${RubyFigureImg}) no-repeat;
    background-size: contain;
    width: 220px;
    height: 550px;
`}

  ${Media.desktop`
        bottom: 28%;
        right: 80px;
        width: 240px;
        height: 600px;
    `}
`;

/**
 * @function t() Function which translating based on broswer lanaguase
 * @function withTranslation() HOC(Higher Order Component) and gets the t() function. Pass the i18n instance inside the component
 *
 */

const Index = props => {
  const { t } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <SiteWrapper>
        <MainWrapper>
          <SiteHeader />
          <div id="site-content">
            <Helmet>
              <title>{t("title")}</title>
              <meta
                name="description"
                content="A2 Flyers Digital English Course"
              />
              <meta charSet="utf-8" />
              <link rel="canonical" href="https://fun.rubyrei.com" />
            </Helmet>
            <SectionWrapper>
              <HeroBlock id="hero">
                <Header color={Palette.SandYellow}>
                  {t("center.title.up")}
                  <br />
                  {t("center.title.middle")}
                  <br />
                  <br />
                  {t("center.title.bottom")}
                </Header>
                <div className="desktop-ctas">
                  <DownloadAppCta />
                    <WibbuBtn
                      className="cta-pdf zoom"
                      color="blue"
                      href="https://firebasestorage.googleapis.com/v0/b/ruby-rei-setup/o/FUN-with-Ruby-Rei-Materials-Worksheets.zip?alt=media&token=33ab395f-d9f2-40ae-9f36-f51f868e5ac9"  
                    >
                      {t("worksheet")}
                    </WibbuBtn>
                    <WibbuBtn
                      className="zoom"
                      color="light-green"
                      href="http://help.rubyrei.com/"
                    >
                      {t("needhelp")}
                    </WibbuBtn>
                </div>
                <div className="store-badges">
                  <StoreBadge apple />
                  <StoreBadge google />
                </div>
                <div className="mobile-ctas">
                  <WibbuBtn
                    className="cta-pdf"
                    color="blue"
                    href="https://firebasestorage.googleapis.com/v0/b/ruby-rei-setup/o/FUN-with-Ruby-Rei-Materials-Worksheets.zip?alt=media&token=33ab395f-d9f2-40ae-9f36-f51f868e5ac9"
                  >
                    {t("worksheet")}
                  </WibbuBtn>
                  <WibbuBtn color="light-green" href="http://help.rubyrei.com/">
                    {t("needhelp")}
                  </WibbuBtn>
                </div>
                <div className="video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3WqX_Ca6q98"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <Body xs>
                  {t("fun.with.ruby.Rei")} <b>{t("turkey")}</b> {t("and")}{" "}
                  <b>{t("mexico")}</b>.
                  <p>
                    {t("more.about.ruby.Rei")}{" "}
                    <a
                      href="https://www.cambridge.org/cambridgeenglish/contact"
                      target="_blank"
                    >
                      {t("local.cambridge")}
                    </a>
                    .
                  </p>
                </Body>
                <div className="pub-logos">
                  <div className="centered">
                    <p>
                      <img
                        className="logo cambridge-logos"
                        src={CambridgeLogos}
                        alt="Cambridge University Press logo"
                      />
                    </p>
                    <p>
                      <img
                        className="logo wibbu-logos"
                        src={WibbuLogo}
                        alt="Wibbu logo"
                      />
                    </p>
                  </div>
                </div>
                <RubyFigure />
              </HeroBlock>
            </SectionWrapper>
          </div>
        </MainWrapper>
        <SiteFooter />
      </SiteWrapper>
    </React.Fragment>
  );
};

export default withTranslation()(Index);
