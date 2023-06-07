import React from 'react';
import { NavLink } from 'react-router-dom';

const English = () => {
  return (
    <div className="subjects-container">
      <div className="youtube">
        <ul>
          <h1>Youtube</h1>
          <li>
            <NavLink
              to="https://www.youtube.com/@EnglishClass101"
              target="_blank"
            >
              EnglishClass101
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.youtube.com/@EnglishFluencyJourney"
              target="_blank"
            >
              English Fluency Journey
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.youtube.com/@mmmEnglish_Emma"
              target="_blank"
            >
              MMMEnglish
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.youtube.com/@EnglishSpeakingCourses"
              target="_blank"
            >
              English Speaking Courses
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="websites">
        <ul>
          <h1>Websites</h1>
          <li>
            <NavLink to="https://www.duolingo.com/" target="_blank">
              Duolingo
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.engvid.com/" target="_blank">
              Engvid
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.bbc.co.uk/learningenglish/"
              target="_blank"
            >
              BBC Learning
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.englishcentral.com/" target="_blank">
              English Central
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="tools">
        <ul>
          <h1>Tools</h1>
          <li>
            <NavLink to="https://translate.google.com/" target="_blank">
              Google Translator
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.linguee.com/" target="_blank">
              Linguee
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.collinsdictionary.com/" target="_blank">
              Collins Dictionary
            </NavLink>
          </li>
          <li>
            <NavLink to="https://youtube.com/" target="_blank">
              Youtube
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default English;
