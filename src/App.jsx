import React from 'react';
import ctdLogo from './assets/mono-blue-logo.svg'
import './App.css';
/*
function App() {
  return (
    <div className="coming-soon"> // 1. creates a div with class "coming-soon"
      <h1>CTD SWAG</h1> // 2. inside div is placed a h1 with text 
      <div style={{ height: 100, width:100 }}> / /3. Then a div with inline style
        <img src={ctdLogo} alt="Code the Dream Logo" /> // 4. inside the div an image with src and alt
      </div>
      <h2>Coming Soon...</h2> // 5. h2 with text
    </div>
  );
}
*/
//top and bottom code are equivalent only top is JSX dependent and bottom is javascript react.createElement() dependent 

function App() {
  return React.createElement( // 1.creates a root <div> type
   'div',
   {
    className: 'coming-soon', // 2. gives it a className prop
   },
   React.createElement('h1', null, 'CTD Swag'), // 3. First child: <h1>CTD Swag</h1>
   React.createElement( // 4. second child: another div with style
    'div',
    {
      style: {
        height: 100,
        width: 100,
      },
    },
    React.createElement('img', { // 5. nested inside it: <img src=... alt=.../>
      src: ctdLogo,
      alt: 'Code The Dream Logo',
    }),
   ), 
   React.createElement('h2', null, 'Coming Soon...'), // 6. Third child: <h2>Coming Soon...</h2>
  );
}
export default App;
