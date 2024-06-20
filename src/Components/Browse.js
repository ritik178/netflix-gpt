import React from 'react';
import Header from './Header';
import useTop100Movies from '../hooks/useTop100Movies';

import SecondryContainer from './SecondryContainer';
import MainContainer from './MainContainer';


const Browse = () => {
   useTop100Movies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondryContainer/>
      
    </div>
  );
};

export default Browse;