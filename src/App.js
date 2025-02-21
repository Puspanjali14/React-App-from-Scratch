import React, { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UseEffectExample from './components/UseEffectExample';

const App = () => {
  // State for toggling visibility of components
  const [showComponents, setShowComponents] = useState(true);

  // Event handler to toggle visibility
  const toggleComponents = () => {
    setShowComponents(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Components Example</h1>
      
      {/* Toggle Button */}
      <button onClick={toggleComponents} style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer' }}>
        {showComponents ? 'Hide Components' : 'Show Components'}
      </button>

      {/* Conditional rendering based on `showComponents` state */}
      {showComponents && (
        <>
          <HelloWorld />
          <Greeting name="Beautiful People" />
          <Counter />
          <UseEffectExample />
        </>
      )}
    </div>
  );
}

export default App;
