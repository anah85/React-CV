import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';

const About = ({aboutMe}) => (
  <div className={styles.About}>
   <h1>Sobre mí: {aboutMe.info}</h1>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
