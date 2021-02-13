import React from "react";
import "./Skills.css";

import CSS from './assets/css-3.svg';

function Skills() {
  return (
    <>
      <div className="container">
        <h1>Stack</h1>
        <ul>
          <li>
            <img src={CSS}/>
          </li>
          <li>
            <img src={CSS}/>
          </li>
          <li>
            <img src={CSS}/>
          </li>
          <li>
            <img src={CSS}/>
          </li>
          <li>
            <img src={CSS}/>
          </li>
          <li>
            <img src={CSS}/>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
