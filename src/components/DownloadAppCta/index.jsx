import React from "react";
import styled from "styled-components";
import { WibbuBtn } from "../Buttons";
import { TextModal } from "../Modal";

const Overlay = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;
    background-color: rgba(0,0,0,.7);
    width: 100vw;
    height: 100vh;
`;

const DownloadModal = styled(TextModal)`
    display: none;
    font-size: 0.9em;
    text-align: center;
    line-height: 1.6em;
    width: 660px;
    height: 200px;
`;

class DownloadAppCta extends React.Component {
    state = {
        showSpeedbump: false
    }

    _confirmDownload = () => {
        this.setState({showSpeedbump: true});
    }

    _cancelDownload = () => {
        this.setState({showSpeedbump: false});
    }

    render() {
        const displaySpeedbump = this.state.showSpeedbump ? 'block' : 'none';
        return(
            <React.Fragment>
                <WibbuBtn className="cta-app zoom" onClick={this._confirmDownload}>Download (PC)</WibbuBtn>
                <DownloadModal style={{display: displaySpeedbump}}>
                    <p>You are about to download FUN with Ruby Rei on this computer (700MB). <br/>If you don't have a login, please <a href="https://www.cambridge.org/cambridgeenglish/contact" target="_blank">contact us</a> before downloading.</p>
                    <p>Do you wish to continue?</p>
                    <footer>
                        <a className="modal-btn" href="#">YES</a>
                        <a className="modal-btn" onClick={this._cancelDownload}>NO</a>
                    </footer>
                </DownloadModal>
                <Overlay style={{display: displaySpeedbump}}/>
            </React.Fragment>
        );
    }
}

export default DownloadAppCta;