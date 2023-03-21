import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';

const Experience = ({experience}) => (
  <div className={styles.myEx}>
    <h3>Experiencia</h3>
    {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>✅{item.name}</p>
              <p>{item.date}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
  </div>
);

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
