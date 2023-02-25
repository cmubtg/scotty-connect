import React from 'react';

function Footer () {
  const footerStyles = {
    footer : {
      position: "absolute",
      bottom: "0",
      width: "auto",
      height: "5rem",
      left: "2.5rem",
      right: "2.5rem",
    },
    box : {
      backgroundColor: "#D9D9D9",
      height: "3rem",
      width: "3rem",
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
    container: {
      display: "flex",
      justifyContent: 'space-between',
      left: "20px",
    }
  }
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <div style={footerStyles.textContainer}>
          <div>
            <span style={footerStyles.text}>Created by Carnegie Mellon University Business Technology Group</span>
          </div>
          <div>
            <span style={footerStyles.text}>Contact </span>
            <a style={footerStyles.text} href="https://cmubtg.com/">@info@cmu.btg.com</a>
            <span style={footerStyles.text}> for inquires and concerns</span>
          </div>
        </div>
        <div style={footerStyles.box}></div>
      </div>
    </footer>
  )
}

export default Footer;