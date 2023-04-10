import React from "react";
import Logo from "../images/btg-logo-white-red-footer.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const footerStyles = {
    footer: {
      position: "absolute",
      bottom: "0",
      width: "100%",
      height: "3.5rem",
      left: "0",
      right: "0",
      paddingBottom: "0.5rem",
    },
    line: {
      position: "absolute",
      bottom: "4.5rem",
      width: "100%",
      borderTop: "1.5px solid #D3D3D3",
    },
    box: {
      height: "2.5rem",
      width: "2.5rem",
      borderWidth: "0",
      zIndex: "1",
    },
    textContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      lineHeight: "1",
    },        
    text: {
      fontFamily: "lato",
      fontSize: "13px",
      color: "#797979",
    },
    text1: {
      fontFamily: "lato",
      fontSize: "13px",
      color: "#EE5C5C",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      left: "20px",
      width: "95%",
      marginLeft: "2.5rem",
      marginRight: "2.5rem",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    icon: {
      height: "2rem",
      width: "2rem",
      fill: "#D3D3D3",
      marginTop: "-10px",
    },
  };

  return (
    <>
      <div style={footerStyles.line}></div>
      <footer style={footerStyles.footer}>
        <div style={footerStyles.container}>
          <div style={footerStyles.logoContainer}>
            <img src={Logo} alt="BTG Logo" style={footerStyles.box} />
            <div style={footerStyles.textContainer}>
              <div>
                <span style={footerStyles.text}>
                  Created by Carnegie Mellon University Business Technology Group
                </span>
              </div>
              <div>
                <span style={footerStyles.text}>&copy; 2023</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
        <a href="https://www.instagram.com/cmubtg" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#818181" }} />
        </a>
        <a href="mailto:info@cmubtg.com" style={{ marginRight: "10px" }}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "#818181" }} />
        </a>
        <a href="https://www.linkedin.com/company/cmubtg/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{ color: "#818181" }} />
        </a>
      </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
