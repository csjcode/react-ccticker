import React, { Component } from 'react';

import './App.css';


import HeaderSection from './HeaderSection/HeaderSection';
import FooterSection from './FooterSection/FooterSection';
import ContentSection from './ContentSection/ContentSection';



const App = (props) => {
   return (
      <div>
        {/* <HeaderSection /> */}
        <ContentSection />
        {/* <FooterSection /> */}
      </div>
   )
 }
 

export default App;
