import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import fotoCv from "../../assets/images/fotoCv.JPG"


const Hero = ({hero}) => (
  <div className={styles.Hero}>
  <img src={fotoCv}/>
  <div className="card">
    <h1>Hola, soy {hero.name}</h1>
    <p>Vivo en {hero.city}</p>
    <p><a href={"mailto:" + hero.email}>anahartmann.85@protonmail.com</a></p>
    <p>📲 {hero.phone}</p>
        <p>💼<a href={hero.gitHub}>GitHub</a></p>
    </div>
  </div>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
