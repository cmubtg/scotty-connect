import React from "react";
import Logo from '../images/logo.svg';
import { Navbar } from "react-bootstrap";
import { navigate } from 'gatsby';
import '../css/navigation.css';
function Navigation() {

  const handleClick = () => {
    navigate('/');
    console.log('clicked');
  }

  return (
    <div>
        <Navbar className='navHeader'>
           <img src={Logo} alt={Logo} className='navImage' onClick={handleClick}/>
        </Navbar>

    </div>
  );
}

export default Navigation;