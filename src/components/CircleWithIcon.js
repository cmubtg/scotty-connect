import React, { useState, useRef, useEffect } from 'react';
import '../css/CircleWithIcon.css';

function CircleWithIcon() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleModalClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleModalClose);
    return () => {
      document.removeEventListener('mousedown', handleModalClose);
    };
  }, []);

  return (
    <div className="circle" onMouseEnter={() => setShowModal(true)} onMouseLeave={() => setShowModal(false)}>
      <div className="icon">
        <div className="small-circle"></div>
        <div className="rectangle">{showModal && <div className="triangle"></div>}</div>
      </div>
      {showModal && (
        <div ref={modalRef} className="modal-overlay">
          <h2><b>Welcome to ScottyConnect! 👋</b></h2>
          <h2> </h2>
          <h3>We help you navigate your academic path by providing a list of 
            courses Carnegie Mellon students have taken in the past. </h3>
          <h2> </h2>
          <h3>You can search by majors or include additional filters to find 
            people that are most similar to you. We hope you find our website helpful!</h3>
          <h2> </h2>
          <p>Scotty Connect is a platform created by Carnegie Mellon’s 
          Business Technology Group.</p>
        </div>
      )}
    </div>
  );
}

export default CircleWithIcon;
