import React from 'react';
import codeIMG from './assets/codeIMG.jpg';
import englishIMG from './assets/englishIMG.jpg';
import { NavLink } from 'react-router-dom';

const Subjects = () => {
  return (
    <div className="subjects">
      <NavLink to="./programming" className="subject-img">
        <div>
          <h1>Programming</h1>
          <p>The best tools to learn to code for free.</p>
          <img src={codeIMG} alt="" />
        </div>
      </NavLink>
      <NavLink to="./english" className="subject-img">
        <div>
          <h1>English</h1>
          <p>The best tools to learn english for free.</p>
          <img src={englishIMG} alt="" />
        </div>
      </NavLink>
    </div>
  );
};

export default Subjects;
