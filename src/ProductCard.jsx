function ProductCard({ baseName, baseDescription, handleAddItemToCart, id }) {
   return(
   <li>
      <div className="itemCard">
        <h2>{baseName}</h2>
        <p>{baseDescription}</p>
        <button onClick={() => handleAddItemToCart(id)}>Add to Cart</button>
      </div>
    </li>
    );
}

export default ProductCard;
