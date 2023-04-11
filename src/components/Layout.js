import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";
import { Link } from 'gatsby';

export default function Layout({ children, showSavedText = false }) {
  return (
    <div style={{minHeight: "100vh", position: "relative"}}>
      <FadeIn>
        <Navigation />
        <div style={{paddingBottom: "5rem"}}>
          {children}
        </div>
        {showSavedText && (
          <Link to="/saved" className="saved-text" style={{ cursor: "pointer", textDecoration: "none", color: "white" }}>
            Saved
          </Link>
        )}
        <Footer/>
      </FadeIn>
    </div>
  )
}
