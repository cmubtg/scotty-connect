import React from 'react';
import Logo from '../images/btg-logo-white-red-footer.svg';

function Footer () {
  const footerStyles = {
    footer : {
      position: "relative",
      bottom: "0",
      width: "auto",
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
      height: "3",
      width: "3",
      borderWidth: '0',
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
              <span style={footerStyles.text}>Carnegie Mellon University Business Technology Group</span>
            </div>
            <div>
              <span style={footerStyles.text}>©</span>
              
              <span style={footerStyles.text}> 2023</span>
            </div>
          </div>
          <img src={Logo} alt={Logo} style={footerStyles.box} />
        </div>
      </footer>
    </div>
  )
}

export default Footer;