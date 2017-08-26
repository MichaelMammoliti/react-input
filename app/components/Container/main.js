import React from 'react';
import styles from './main.scss';

const Container = ({ children }) =>
  <div className={styles.container}>
    {children}
  </div>
;

export default Container;
