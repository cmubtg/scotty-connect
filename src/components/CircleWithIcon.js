import React, { useState, useRef, useEffect } from 'react';
import '../css/CircleWithIcon.css';

function CircleWithIcon() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleClick = () => {
    setShowModal(!showModal);
  };

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

  const triangle = showModal ? <div className="triangle"></div> : null;

  return (
    <div className="circle" onClick={handleClick}>
      <div className="icon">
        <div className="small-circle"></div>
        <div className="rectangle">{triangle}</div>
        {/* <div className="rectangle">{triangle}</div> */}
      </div>
      {showModal && (
        <div ref={modalRef} className="modal-overlay">
          {/* <div className="modal"> */}
            <h2><b>Welcome to ScottyConnect! 👋</b></h2>
            <h3>We help you navigate your academic path by providing a list of 
              courses Carnegie Mellon students have taken in the past. </h3>
            <h3>You can search by majors or include additional filters to find 
              people that are most similar to you. We hope you find our website helpful!</h3>
            <p>Scotty Connect is a platform created by Carnegie Mellon’s 
              Business Technology Group.</p>
          {/* </div> */}
        </div>
      )}
    </div>
  );
}

export default CircleWithIcon;
