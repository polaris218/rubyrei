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
            transition: transform .125s;

            &:first-child { margin-right: 16px; }
            &:last-child { margin-left: 16px; }


        }
              
        .modal-btn:hover {
                -ms-transform: scale(1.1); /* IE 9 */
                -webkit-transform: scale(1.1); /* Safari 3-8 */
                transform: scale(1.1);
                text-decoration: none;
        }
    }
`;