import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import HeaderSection from './HeaderSection/HeaderSection';
import FooterSection from './FooterSection/FooterSection';

const App = (props) => {
   return (
     <div>
       <HeaderSection />
       <div>This is the BodySection</div>
       <FooterSection />
     </div>
   )
 }
 

export default App;
