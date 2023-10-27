import React, { useEffect } from "react";
import pic from "./image/onload.gif";
import fullpic from "./image/full-icon.png";
import "./OnLoad.css";

export const OnLoad = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("onload-image").src = fullpic;
      document.getElementById("onload-cont").style.animationName = "scaling";
    }, 4000);
    setTimeout(() => {
      document.getElementById("onload-cont").style.display = "none";
    }, 6000);
  }, []);
  return (
    <div id="onload-cont">
      <img id="onload-image" src={pic} alt="E-Cell" />
    </div>
  );
};
