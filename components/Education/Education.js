import React from 'react';
import PropTypes from 'prop-types';
import styles from './Education.module.css';

const Education = ({ education, tools }) => {
  return (
    <div>
      <div className={styles.educationC}>
        {education.map((data) => {
          return (
            <div key={JSON.stringify(data)}>
              <p className="name"> 👩🏾‍🎓{data.name}</p>
              <p>{data.where}</p>
              <p>{data.date}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.toolsC}>
        {tools.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
            <img src={item.src}/>
            <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

 
    
 

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
