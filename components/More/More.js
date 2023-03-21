import React from 'react';
import PropTypes from 'prop-types';
import styles from './More.module.css';

const More = ({languages, habilities}) => (
  <div className={styles.More}>
   <ul className={styles.Idiomas}><h4>Idiomas:</h4> 
   <li>{languages.language}</li>
   <li>{languages.language1}</li>
   <li>{languages.language2}</li>
   </ul>
   <ul className={styles.Logros}>
   <h4>Mis logros:</h4>
   {habilities.map(logros => { return (<li key={logros}>{logros}</li>)})}
   </ul>

  </div>
);

More.propTypes = {};

More.defaultProps = {};

export default More;
