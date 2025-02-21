import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Component mounted!');
    setMessage('Hello, React!');
  }, []);  // Empty dependency array means it runs only once when the component mounts.

  return <p>{message}</p>;
}

export default UseEffectExample;
