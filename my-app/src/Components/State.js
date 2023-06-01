import React, { useState } from 'react';



function ToggleContent() {
    const [showContent, setShowContent] = useState(false);
  
    const toggleContent = () => {
      setShowContent(!showContent);
    };
  
    return (
      <div>
        <button onClick={toggleContent}>Toggle Content</button>
        {showContent && <p>Content to be shown or hidden</p>}
      </div>
    );
  }

export default State;
