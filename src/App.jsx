import { useState, useEffect, useRef } from 'react';
import './App.css';
import inventoryData from './assets/inventory.json';
import Header from '../shared/layout/Header';
import ProductList from '../features/ProductList/ProductList';
import ProductCard from '../features/ProductList/ProductCard';
import Cart from '../features/ProductList/Cart/Cart';
import Footer from './layouts/Footer';

function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
 

  function handleAddItemToCart(id) {
    const inventoryItem = inventory.find((item) => item.id === id);
    //if no inventory items are found we prevent the app from crashing by exiting this function now
    if (!inventoryItem) {
      console.error('cart error: item not found');
      return;
    }
    const itemToUpdate = cart.find((item) => item.id === id);
    let updatedCartItem;
    if (itemToUpdate) {
      updatedCartItem = {
        ...itemToUpdate,
        itemCount: itemToUpdate.itemCount + 1,
      };
      console.log(
        `Increased quantity for ${inventoryItem.baseName} to ${updatedCartItem.itemCount}`
      );
    } else {
      updatedCartItem = { ...inventoryItem, itemCount: 1 };
      console.log(`Added new item: ${inventoryItem.baseName}`);
    }
    setCart([...cart.filter((item) => item.id !== id), updatedCartItem]);
  }

  function removeItemFromCart(id) {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart([...updateCart]);
  }

  function handleOpenCart() {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  }

  function handleCloseCart() {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  }

  return (
    <>
      <Header cart={cart} handleOpenCart={handleOpenCart} />
      <main>
        <ProductList
          inventory={inventory}
          handleAddItemToCart={handleAddItemToCart}
        />
        {isCartOpen && (
          <Cart
            cart={cart}
            setCart={setCart}
            handleCloseCart={handleCloseCart}
          />
        )}
      </main>
    <Footer />
     
    </>
  );
}
export default App;
