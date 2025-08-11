import { useState, useEffect } from 'react';
import './App.css';
import inventoryData from "./assets/inventory.json";
import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';


function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  const [cart, setCart] = useState([]);

  function handleAddItemToCart(id) {
    const target = inventory.find((item) => item.id === id);
    //if no inventory items are found we prevent the app from crashing by exiting this function now
    if (!target) {
      console.error('cart error: item not found');
      return;
    }

    const cartItem = { ...target, cartItemId: Date.now() };
    console.log(cartItem);
    setCart([...cart, cartItem]);
  }

  function removeItemFromCart(id) {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart([...updateCart]);
  }

  return (
    <main>
      <Header cart={cart}/>
      <ProductList inventory={inventory} handleAddItemToCart={handleAddItemToCart}/>
    </main>
  );
}
export default App;