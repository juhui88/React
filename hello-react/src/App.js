import React, {useState} from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample'
import LifeCycleSample from './LifeCycleSample'
import ErrorBoundary from './ErrorBoundary'
import Info from './Info'


const App =() => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
    </div>
  );
};

export default App;

