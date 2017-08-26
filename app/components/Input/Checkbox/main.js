import React from 'react';
import styles from './main.scss';

const Checkbox = ({ selected, value }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" value={value} />
    </div>
  );
};

export default Checkbox;
