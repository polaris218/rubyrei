import styled from "styled-components";
import PinkButtonBg from "../../assets/img/buttons-pink.png";
import BlueButtonBg from "../../assets/img/buttons-blue.png";
import WhiteButtonBg from "../../assets/img/buttons-white.png";
import OrangeButtonBg from "../../assets/img/buttons-orange.png";
import LightGreenButtonBg from "../../assets/img/buttons-lightgreen.png";

const COLORS = {
    'blue': BlueButtonBg,
    'pink': PinkButtonBg,
    'white': WhiteButtonBg,
    'orange': OrangeButtonBg,
    'light-green': LightGreenButtonBg
}

export default styled.a`
    display: block;
    color: #FFFFFF;
    text-transform: uppercase;
    background-image: url(${props => COLORS[props.color]});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    // background-color: Transparent;
    // border: none;
    padding: 20px 40px;
    // margin-right: 30px;
    &:hover {
        color: #fff;
        text-decoration: none;
    }
`;