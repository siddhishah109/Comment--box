import React, { useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiButton: React.FC = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleClick = () => {
    setIsConfettiActive(true);
    // after 3 seconds
    setTimeout(() => setIsConfettiActive(false), 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </div>
  );
};

export default ConfettiButton;
