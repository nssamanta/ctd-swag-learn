import { useState } from 'react';
import ProductCardVariants from './ProductCardVariants';

function ProductCard({ baseName, baseDescription, handleAddItemToCart, variants }) {
  //ADD STATE: create state to track if variants are currently shown
  const [areVariantsShown, setAreVariantsShown] = useState(false);

   return (
     <li>
       <div className="itemCard">
         <h2>{baseName}</h2>
         <p>{baseDescription}</p>
         {/**update button logic based on variants length */}
         <div className="productButtons">
           {variants.length > 1 ? (
             //multiple variants: show "show options" button, onClick show variants when clicked
             <button onClick={() => {
              setAreVariantsShown(true)
             }}>Show Options</button>
           ) : (
             //single variant: show "add to cart" button with first variants id
             <button onClick={() => handleAddItemToCart(variants[0].id)}>
               Add to Cart
             </button>
           )}
         </div>
       </div>

        {/**CONDITIONAL RENDERING: only show ProductCardVariants when areVariants is true*/}
           {areVariantsShown && (
            <ProductCardVariants handleAddItemToCart={handleAddItemToCart}
            variants={variants}
            /**CLOSE FUNCTION: pass function to hide variants when user clicks close */
            closeVariants={() => setAreVariantsShown(false)}/>
           )}
     </li>
   );
}

export default ProductCard;
