import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

import { WibbuBtn } from "../Buttons";
import { TextModal } from "../Modal";

const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.7);
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
    showSpeedbump: false,
    device: typeof window !== `undefined` && 
      navigator.userAgent.indexOf('WOW64')>-1 || window.navigator.platform=='Win64'? true: false,
  };

  _confirmDownload = () => {
    this.setState({ showSpeedbump: true });
  };

  _cancelDownload = () => {
    this.setState({ showSpeedbump: false });
  };

  render() {
    const displaySpeedbump = this.state.showSpeedbump ? "block" : "none";
    const { t } = this.props;

    return (
      <React.Fragment>
        <WibbuBtn
          className="cta-app zoom"
          color="pink"
          onClick={this._confirmDownload}
          href="/"
        >
          {t("download")}
        </WibbuBtn>
        <DownloadModal style={{ display: displaySpeedbump }}>
          <p>
            {t("download.pc")} <br />
            {t("login.please")} {" "}
            <a
              href="https://www.cambridge.org/cambridgeenglish/contact"
              target="_blank"
            >
              {t("contact.us")}
            </a>{" "}
            {t("before.downloading")}
          </p>
          <p>{t("want.continue")}</p>
          <footer>
            <a
              className="modal-btn"
              href={
                !this.state.device
                  ? `https://firebasestorage.googleapis.com/v0/b/ruby-rei-setup/o/FUN%20with%20Ruby%20Rei%20Setup%20v3-0-0b8.exe?alt=media&token=74f6b83d-9c0a-4620-9ea4-929619232ee7`
                  : `https://firebasestorage.googleapis.com/v0/b/ruby-rei-setup/o/FUN%20with%20Ruby%20Rei%20Setup%20v3-0-0b8%2032-bit.exe?alt=media&token=1fd5f6cf-b640-441f-96f5-45ccae286a5d`
              }
            >
              {t("yes")}
            </a>
            <a className="modal-btn" onClick={this._cancelDownload}>
              {t("no")}
            </a>
          </footer>
        </DownloadModal>
        <Overlay style={{ display: displaySpeedbump }} />
      </React.Fragment>
    );
  }
}

export default withTranslation()(DownloadAppCta);
