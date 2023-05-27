import React from "react";
import photo from "../images/photo.jpeg";

function Download() {
  return (
    <div>
      <h2>Downlaod</h2>
      <a href={photo} download={"Photo"} target="blank" rel="noreferer">
        <button>Click here to Download Photo</button>
      </a>
    </div>
  );
}

export default Download;
