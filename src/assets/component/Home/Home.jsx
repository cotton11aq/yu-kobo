import React from 'react';
import { Top, SecTitle, SecText, AboutLink, Contents, Header } from '../index';

const Home = () => {
  return (
    <>
      <Header id={'top'} />
      <Top className={'top-content top-content01'} />
      <SecTitle />
      <SecText />
      <AboutLink />
      <Contents />
    </>
  );
};

export default Home;
