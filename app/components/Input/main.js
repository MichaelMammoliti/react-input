import React from 'react';
import styles from './main.scss';

import Checkbox from './Checkbox/main';

const Input = ({
  type,
  disabled,
  invalid,
}) => {
  const buildElement = () => {
    let el;

    if (type === 'checkbox') {
      el = <Checkbox />;
    }

    return el;
  }

  const element = buildElement();

  if (!element) {
    console.error(`your input type="${type}" will not be rendered`);

    return null;
  }

  return <div className={styles.input}>{element}</div>;
};

export default Input;
