import React from 'react';
import HelloWorld from './components/HelloWorld';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UseEffectExample from './components/UseEffectExample';

const App = () => {
  return (
    <div>
      <HelloWorld />
      <Greeting name="Beautiful People" />
      <Counter />
      <UseEffectExample />
    </div>
  );
}

export default App;
