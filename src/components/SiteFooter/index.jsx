import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import Palette from "../Palette";
import Media from "../Utils/Media";

const SiteFooter = styled.div`
  background-color: ${Palette.MidnightGreen};
  padding: 24px;

  a {
    color: #f2f2f2;
  }

  #footer-nav nav {
    text-align: center;

    a {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }

    ${Media.tablet`
            display: block;
            margin-left: 24px;

            a {
                display: inline-block;
                margin-right: 24px;
            }
        `}
  }

  .social-links {
    padding-top: 24px;
    padding-bottom: 24px;

    ul,
    ul li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    ul {
      display: flex;
      text-align: center;
    }

    ul li {
      flex: 1;
    }

    a {
      display: block;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 60px;
      width: 32px;
      height: 32px;
      margin: 0 auto;

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }

    ${Media.tablet`
            max-width: 200px;
            margin: 0 auto;
        `}
  }

  .policy,
  .copy {
    display: block;
    text-align: center;

    p {
      font-size: 0.8em;
      opacity: 0.6;
    }
  }

  .copy {
    border-top: 1px solid rgba(242, 242, 242, 0.2);
    padding-top: 8px;
    margin-top: 24px;
  }

  ${Media.tablet`
        padding-left: 30%;
        padding-right: 30%;
    `}
`;

const FooterNavLink = styled.a`
  display: block;
  font-size: 0.8em;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 3em;
`;

const FooterSocialLink = styled.a``;

const SiteFooters = props => {
  const { t } = props;
  console.log(t);
  return (
    <SiteFooter id="site-footer">
      {console.log(props)}
      <div id="footer-nav">
        <nav>
          <FooterNavLink href="http://help.rubyrei.com/">FAQ</FooterNavLink>
          <FooterNavLink
            href="https://www.cambridge.org/cambridgeenglish/contact"
            target="_blank"
          >
            {t("contact")}
          </FooterNavLink>
          <FooterNavLink
            href="https://www.cambridge.org/about-us/legal-notices/privacy-notice/"
            target="_blank"
          >
            {t("privacy")}
          </FooterNavLink>
        </nav>
      </div>
      {/* <div className="social-links">
            <ul>
                <li>
                    <FooterNavLink href="#">ic</FooterNavLink>
                </li>
                <li>
                    <FooterNavLink href="#">ic</FooterNavLink>
                </li>
                <li>
                    <FooterNavLink href="#">ic</FooterNavLink>
                </li>
            </ul>
        </div> */}
      {/* <div className="store-links"></div> */}
      {/* <div className="policy">
            <p>9 Devonshire Square, Spitalfields, London EC2M 4YD</p>
        </div> */}
      <div className="copy">
        <p>
          {t("copyright")} &copy; {t("ucles")}
        </p>
      </div>
    </SiteFooter>
  );
};
export default withTranslation()(SiteFooters);
