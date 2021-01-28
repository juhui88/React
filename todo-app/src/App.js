import React, { useState, useRef, useCallback, useEffect } from 'react';
import Template from './components/Template';
import Comments from './components/Comments';
import img from './고앵이.jpg'
import Like from './components/Like'
import './App.css'

const App = () => {
  return (
    <Template>
      <img src={img}/>
      <Like />
      <Comments />
    </Template>
    
  );
  

};

export default App;