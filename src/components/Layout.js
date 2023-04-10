import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";

export default function Layout({ children }) {
  
  return (
    <div style={{minHeight: "100vh", position: "relative"}}>
      <FadeIn>
        <Navigation />
        <div style={{paddingBottom: "5rem"}}>
          {children}
        </div>
        <Footer/>
      </FadeIn>
    </div>
  )
}
