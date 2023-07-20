import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <React.Fragment>

<Counter start={0} duration={1} step={1} />

      <Counter start={0} duration={1} step={-1} />
    </React.Fragment>
  );
}

export default App;
