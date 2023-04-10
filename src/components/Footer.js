import React from 'react';
import Logo from '../images/btg-logo-white-red-footer.svg';

function Footer () {
  const footerStyles = {
    footer : {
      position: "absolute",
      bottom: "0",
      width: "100%",
      height: "5rem",
      left: "2.5rem",
      right: "2.5rem",
    },
    divider: {
      display: "absolute",
      width: "100%",
      bottom: "0",
      border: "1px solid grey",
    },
    box : {
      height: "3rem",
      width: "3rem",
      borderWidth: '0',
      zIndex: '1',
    },
    textContainer : {
      display: "flex",
      justifyContent: 'space-between',
      flexDirection : "column",
      gap: "20",
    },
    text : {
      fontFamily: "lato",
      fontSize: '15px',
      color: "#797979",
    },
    text1 : {
      fontFamily: "lato",
      fontSize: '15px',
      color: "#EE5C5C",
    },
    container: {
      display: "flex",
      justifyContent: 'space-between',
      left: "20px",
    }
  }
  return (
    <div>
    {/*<div style={footerStyles.divider}></div>*/}
      <footer style={footerStyles.footer}>
        <div style={footerStyles.container}>
          <div style={footerStyles.textContainer}>
            <div>
              <span style={footerStyles.text}>Created by Carnegie Mellon University Business Technology Group</span>
            </div>
            <div>
              <span style={footerStyles.text}>Contact </span>
              <a style={footerStyles.text1} href="mailto:info@cmubtg.com">@info@cmu.btg.com</a>
              <span style={footerStyles.text}> for inquires and concerns</span>
            </div>
          </div>
          <img src={Logo} alt={Logo} style={footerStyles.box} />
        </div>
      </footer>
    </div>
  )
}

export default Footer;