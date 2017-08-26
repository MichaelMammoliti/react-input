import React from 'react';
import styles from './main.scss';

import Container from '../Container/main';
import Module from '../Module/main';
import Input from '../Input/main';

const Page = () =>
  <div className={styles.page}>
    <Container>
      <Module>
        <Input type='checkbox' />
      </Module>
    </Container>
  </div>
;

export default Page;
