import React from "react";
import Logo from '../images/logo.svg';
import { Navbar } from "react-bootstrap";

function Navigation() {
  const headerStyles = {
    header: {
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: '#EC454C',
      width: '100%',
      height: '60px',
    },
    image: {
      width: '52px',
      height: '35px',
      left: '38px',
      top: '43px',
    }
  }

  return (
    <div>
        <Navbar style={headerStyles.header}>
          <img src={Logo} alt={Logo} style ={headerStyles.image} />
        </Navbar>
    </div>
  );
}

export default Navigation;