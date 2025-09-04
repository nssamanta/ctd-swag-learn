//Component shows detailed list of all variants for a product
//displayed when a user clicks "Show Options" on a multi-variant product
function ProductCardVariants({variants, closeVariants, handleAddItemToCart}) {
    return (
        //main wrapper for the variants display
        <div className="productVariantsWrapper">
            {/**list container for all the variants */}
            <ul>
                {/**loop through each variant and create a list item */}
                {variants.map((variant) => {
                    return (
                      <li key={variant.id} className="productVariant">
                        {/**Left Side: Visual preview of the variant */}
                        <div className="variantPreview">
                            {/**product image for this specific variant */}
                          <img 
                          src={`/src/product-images/${variant.image}`} 
                          alt={variant.variantDescription} 
                          />
                          {/**price display for this variant */}
                          <p>${variant.price}</p>
                        </div>

                        {/**Right side: Detailed information and actions */}
                        <div className="variantDetails">
                            {/**variant name (e.g., Small Red T-shirt) */}
                            <h3>{variant.variantName}</h3>
                            {/**Detailed description of this variant */}
                            <p>{variant.variantDescription}</p>

                            {/**Add to cart button for this specific variant */}
                            <button 
                            onClick={() => {handleAddItemToCart(variant.id);
                            closeVariants();
                            }}>
                                Add to cart
                            </button>
                        </div>
                      </li>
                    );
                })}
            </ul>

            {/**Close Button to exit variants view without adding anything */}
            <button 
                className="variantsCloseButton"
                type="button"
                onClick={closeVariants}>
                    Close
                </button>
        </div>
    )
}

export default ProductCardVariants;