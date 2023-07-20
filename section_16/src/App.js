import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import Counter from './components/Counter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <Counter counter={0} duration={1000} step={-1} start={0}/>
    </React.Fragment>
  );
}

export default App;
