import React from 'react';
import './App.css';
import Card from './Card'
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
function App() {
  return (
    <div className="App">
      <div className='main'>
      <Card imge={img1} heading="Heading1"/>
      <Card imge={img2} heading="Heading2"/>
      <Card imge={img3} heading="Heading3"/>
      </div>
      
    </div>
  );
}

export default App;
