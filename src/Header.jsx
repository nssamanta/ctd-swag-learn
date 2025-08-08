import { useEffect } from 'react';
import ctdLogo from './assets/mono-blue-logo.svg';
import shoppingCart from './assets/shoppingCart.svg';

function Header({cart}) {
    useEffect(() => {
        cart.forEach((item) => {
            console.log(item.baseName, item.cartItemId);
        });
        if (cart.length > 0) {
            console.log('--end of cart--')
        }
    });

    return (
      <div className="coming-soon">
        {/* Logo on the left */}
        <div style={{ height: 100, width: 100 }}>
          <img src={ctdLogo} alt="Code The Dream Logo" />
        </div>

        {/*Title at the center */}
        <h1>CTD Swag</h1>

        {/*Shopping cart on the right with item count */}
        <div >
          <img src={shoppingCart} alt="Shopping Cart" />
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
    );
}

export default Header;