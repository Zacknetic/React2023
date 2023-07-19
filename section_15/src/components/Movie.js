import React from 'react';
import classes from './Movie.module.css';

const Movie = (props) => {
  let paragraphs = [];

  if (props.openingText) {
    paragraphs = props.openingText.split("\n\n");
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      {paragraphs.map((p, index) => (
        <p key={index}>
          {p.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      ))}
    </li>
  );
};

export default Movie;
