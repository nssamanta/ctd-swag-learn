import { useState } from 'react';
import CartItem from './CartItem';

function Cart({ cart, handleCloseCart, setCart }) {
  const [workingCart, setWorkingCart] = useState(cart);
  const [isFormDirty, setIsFormDirty] = useState(false);

  function getWorkingCartPrice() {
    return workingCart
      .reduce((acc, item) => acc + item.price * item.itemCount, 0)
      .toFixed(2);
  }

  function handleUpdateField({event, id}) {
    event.preventDefault();
    if (!isFormDirty) {
        setIsFormDirty(true);
    }
    const targetProduct = cart.find((item) => item.id === id);
    const targetIndex = cart.findIndex((item) => item.id === id);
    if (!targetProduct) {
        console.error('cart error: item not found');
        return;
    }
    if (event.target.value < 0 || event.target.value === '') {
        return;
    }
    const updatedProduct = {
        ...targetProduct, 
        itemCount: parseInt(event.target.value, 10),
    };
    setWorkingCart([
        ...workingCart.slice(0, targetIndex), 
        updatedProduct, 
        ...workingCart.slice(targetIndex + 1),
    ]);
  }

  function handleCancel(e) {
    e.preventDefault();
    setIsFormDirty(false);
    setWorkingCart([...cart]);
  }

  function removeEmptyItems(cartItems) {
    return cartItems.filter(item => item.itemCount > 0);
  }

  function handleConfirm(event) {
    event.preventDefault();
    const cleanedCart = removeEmptyItems(workingCart);
    setCart(cleanedCart);
    setIsFormDirty(false);
  }

  return (
    <>
      {/**OVERLAY SCREEN: blurred background effect covers the entire product list behind the cart */}
      <div className="cartScreen"></div>
      {/**MAIN CART CONTAINER: holds all cart content */}
      <div className="cartListWrapper">
        {workingCart.length === 0 ? (
          <p>cart is empty</p>
        ) : (
          <form>
            <ul className="cartList">
              {/*MAP THROUGH CART ITEMS: similar to how products were mapped in ProductList, for each item in the cart array, create a list item */}
              {workingCart.map((item) => {
                return (
                  <CartItem 
                    key={item.id}
                    item={item}
                    onHandleItemUpdate={handleUpdateField}
                  />
                );
              })}
            </ul>
          </form>
        )}

        {isFormDirty && (
            <div>
                <button onClick={handleConfirm}>Confirm Update</button>
                <button onClick={handleCancel}>Cancel Update</button>
            </div>
        )}

        <h2>Cart Total: ${getWorkingCartPrice() || 0}</h2>
        <button onClick={handleCloseCart}>CloseCart</button>
      </div>
    </>
  );
}

export default Cart;
