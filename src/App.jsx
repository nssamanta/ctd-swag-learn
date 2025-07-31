import { useState } from 'react';
import './App.css';
import inventoryData from "./assets/inventory.json";
import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';


function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);

  function promoteItem() {
    return (
      <ProductCard
      baseName="Limited Edition Tee!"
      baseDescription="Special limited edition neon green shirt with a metallic Code the Dream logo shinier than the latest front-end frame work! Signed by the legendary Frank!"
      />
    );
  }

  return (
    <main>
      <Header />
      <ProductList inventory={inventory}> {promoteItem()}</ProductList>
    </main>
  );
}
export default App;
{/*top and bottom code are equivalent only top is JSX dependent and bottom is javascript react.createElement() dependent*/}

{/*
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
*/}

