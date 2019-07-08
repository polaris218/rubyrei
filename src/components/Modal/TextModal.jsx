import styled from "styled-components";
import TextPopupBg from "../../assets/img/text-popup-bg.png";

export default styled.div`
    display: block;
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    background-image: url(${TextPopupBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 550px 200px;
    z-index: 99;
    padding: 40px;
    margin: 0 auto;

    footer {
        display: block;

        a {
            color: #fff;
        }

        .modal-btn {
            display: inline-block;
            text-align: center;
            text-transform: uppercase;
            background-color: #97c885;
            padding: 8px 16px;

            &:first-child { margin-right: 8px; }
            &:last-child { margin-left: 8px; }
        }
    }
`;