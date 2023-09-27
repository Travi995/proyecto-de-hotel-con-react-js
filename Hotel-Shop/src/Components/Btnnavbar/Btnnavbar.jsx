import React from "react";
import Textnavbar from "./../Textnavbar/Textnavbar.jsx";
import Imgnavbar from "../Imgnavbar/Imgnavbar.jsx";

import "./Btnnavbar.css";

const Btnnavbar = ({Srcimg,text,evento,clasebtn,claseicon,clasetext, outEvent}) => {
  return (
    <li
      className={`Btnnavbar ${clasebtn} `}
      onClick={() => evento()} onMouseOut={(arg)=>outEvent(arg)}
    >
      <div className={claseicon}>
        {typeof Srcimg === "string" ? (
          <Imgnavbar srcimg={Srcimg} />
        ) : (
          <Srcimg className={`Iconnavbar ${claseicon}`} />
        )}
      </div>

      <Textnavbar text={text} clase={clasetext}    />
    </li>
  );
};

export default Btnnavbar;
