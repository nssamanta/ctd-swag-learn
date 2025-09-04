import placeholder from '../../../src/assets/placeholder.png';

function CartItem({ item, onHandleItemUpdate }) {
  return (
    <li className="cartListItem" >
      {/*ITEM IMAGE: placeholder image for the cart item */}
      <img src={placeholder} alt="" />
      {/*ITEM NAME: Display the products base name */}
      <h2>{item.baseName}</h2>
      {item.variantName !== 'Default' ? <p>{item.variantName}</p> : null}

      {/**ITEM PRICE SECTION: shows individual item cost */}
      <div className="cartListItemSubtotal">
        <label>
          Count:
          <input
            type="number"
            min="0"
            value={item.itemCount}
            onChange={(event) => onHandleItemUpdate({ event, id: item.id })}
          />
        </label>
        <p>Subtotal: ${(item.price * item.itemCount).toFixed(2) || 0}</p>
      </div>
    </li>
  );
}
export default CartItem;
