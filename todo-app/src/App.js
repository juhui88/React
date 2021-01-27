import React, { useState, useRef, useCallback, useEffect } from 'react';
import Template from './components/Template';
import Comments from './components/Comments';
import img from './어이없음.jpg'
import Like from './components/Like'
import './App.css'

const App = () => {
  return (
    <Template>
      <img 
      src={img}
      width='500'
      height='500' 
      />
      <Like />
      <Comments />
    </Template>
    
  );
  

};

export default App;