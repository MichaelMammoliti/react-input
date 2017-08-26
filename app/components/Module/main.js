import React from 'react';
import styles from './main.scss';

const Module = ({ children }) =>
  <div className={styles.module}>
    {children}
  </div>
;

export default Module;
