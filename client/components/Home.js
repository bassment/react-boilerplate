import '../css/globals.css';
import shared from '../css/shared.css';
import styles from '../css/Home.css';

import React from 'react';
import Helmet from 'react-helmet';

const Home = () => (
  <div>
    <Helmet title="React"/>
      <section className={shared.section}>
        <h1>Hello</h1>
        <p>Some text to check if basscss works</p>
        <button className={styles.button}>Hi</button>
      </section>
  </div>
);

export default Home;
