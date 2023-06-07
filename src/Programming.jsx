import React from 'react';
import { NavLink } from 'react-router-dom';
const Programming = () => {
  return (
    <>
      <div className="subjects-container">
        <div className="youtube">
          <ul>
            <h1>Youtube</h1>
            <li>
              <NavLink
                to="https://www.youtube.com/@freecodecamp"
                target="_blank"
              >
                Free Code Camp
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.youtube.com/@AniaKubow" target="_blank">
                Ania Kubow
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.youtube.com/@Scrimba" target="_blank">
                Scrimba
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.youtube.com/@kodegod" target="_blank">
                Kodegod
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="websites">
          <ul>
            <h1>Websites</h1>
            <li>
              <NavLink to="https://www.theodinproject.com/" target="_blank">
                The Odin Project
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.freecodecamp.org/" target="_blank">
                Free Code Camp
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.codecademy.com/" target="_blank">
                CodeCademy
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.edx.org/" target="_blank">
                edX
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="tools">
          <ul>
            <h1>Tools</h1>
            <li>
              <NavLink to="https://google.com/" target="_blank">
                Google
              </NavLink>
            </li>
            <li>
              <NavLink to="https://stackoverflow.com/" target="_blank">
                Stack Overflow
              </NavLink>
            </li>
            <li>
              <NavLink to="https://codepen.io/" target="_blank">
                Codepen
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/" target="_blank">
                Github
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Programming;
