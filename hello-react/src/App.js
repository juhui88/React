import React, {useState, Component} from 'react';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Info from './Info';
import Counter from './Counter';
import Average from './Average';

class App extends Component {

  state =  {
    upDown: 'u',
    value:' TO Bottom',
  }

  upOrDown = () => {
    if(this.state.upDown==='u'){
      this.setState({
        upDown: 'd',
        value: 'To Top',
      });
    }
    else {
      this.setState({
        upDown: 'u',
        value: 'To Bottom',
      });
    }
  }

  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => {
          this.scrollBox.scrollChange(this.state.upDown);
          this.upOrDown();
        }}>
          이동
        </button>
      </div>
    );
  }
}

export default App;

