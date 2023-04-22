import React from "react";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

function UserDisplay(props) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>{props.name}</Popover.Header>
      <Popover.Body>
      {props.major} <br/> {props.classes}, <br/> Class of {props.year}
      </Popover.Body>     
    </Popover>
  );

  return (
    <OverlayTrigger
      placement="right"
      overlay={popover}
    >
      <div className="team-photo-wrapper-point p-0">
        <div className="team-photo">
        <GatsbyImage image={props.photo} alt={props.name}/>
        </div>
        <div className="team-description px-3">
          <h5 className="font-weight-bold mt-md-3">{props.name}</h5>
        </div>
        <div className="team-gradient"></div>
      </div>
    </OverlayTrigger>
  );
}

export default UserDisplay;