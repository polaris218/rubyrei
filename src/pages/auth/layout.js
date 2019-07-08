import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Palette from "../../components/Palette";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

const GlobalStyle = createGlobalStyle`
    //@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

    body {
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #333;
        background-color: #ffffff;
    }

    img {
        width: 100%;
        height: auto;
    }

    a,
    a:visited {
        color: ${Palette.MidnightGreen}
    }

    a:hover {
        text-decoration: none;
    }
`;

const Layout = styled.div``;

export default ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        <Layout>{children}</Layout>
    </React.Fragment>
);