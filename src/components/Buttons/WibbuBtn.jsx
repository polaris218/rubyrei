import styled from "styled-components";
import PinkButtonBg from "../../assets/img/buttons-pink.png";
import DarkButtonBg from "../../assets/img/buttons-dark.png";
import WhiteButtonBg from "../../assets/img/buttons-white.png";

const COLORS = {
    'dark': DarkButtonBg,
    'pink': PinkButtonBg,
    'white': WhiteButtonBg
}

export default styled.a`
    display: block;
    color: #FFFFFF;
    text-transform: uppercase;
    background-image: url(${props => COLORS[props.color] || PinkButtonBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    //width: 180px !important;
    //height: 24px !important;
    padding: 20px 32px;

    &:hover {
        color: #fff;
        text-decoration: none;
    }
`;