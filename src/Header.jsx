import ctdLogo from './assets/mono-blue-logo.svg';
import shoppingCart from './assets/shoppingCart.svg';

function Header({cart, handleOpenCart}) {
  function getItemCount() {
    return cart.reduce((acc, item) => acc + item.itemCount, 0);
  }
    return (
      <header>
        <div className="siteBranding">
          {/* Logo on the left */}
          <div style={{ height: 100, width: 100 }}>
            <img src={ctdLogo} alt="Code The Dream Logo" />
            {/*Title at the center */}
            <h1>CTD Swag</h1>
          </div>
          {/*Shopping cart on the right with item count */}
          <div className="shoppingCart">
            <button type="button" onClick={handleOpenCart}>
              <img src={shoppingCart} alt="" />
              <p className="cartCount">{getItemCount()}</p>
            </button>
          </div>
        </div>
      </header>
    );
}

export default Header;