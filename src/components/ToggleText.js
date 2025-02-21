import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Event handler for toggling visibility
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState); // Toggle between true and false
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This is a message!</p>}
    </div>
  );
}

export default ToggleText;
