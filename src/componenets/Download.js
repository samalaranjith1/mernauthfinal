import React from "react";
import photo from "../images/photo.jpeg";
import { useLocation } from "react-router-dom";

function Download() {
  const location = useLocation();
  return (
    <div>
      <h2>{location.state.id}</h2>
      <h2>Downlaod</h2>
      <a href={photo} download={"Photo"} target="blank" rel="noreferer">
        <button>Click here to Download Photo</button>
      </a>
    </div>
  );
}

export default Download;
