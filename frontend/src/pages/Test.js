import React, { useState } from 'react';
import TestDescription from './TestDesc';
import TestSections from './TestSec';

function Test() {
  const [showTestSections, setShowTestSections] = useState(false);

  const handleStartClick = () => {
    setShowTestSections(true);
  };

  return (
    <div>
      {showTestSections ? (
        <TestSections />
      ) : (
        <TestDescription onStartClick={handleStartClick} />
      )}
    </div>
  );
}

export default Test;
