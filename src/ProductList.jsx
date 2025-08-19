import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductList({ inventory, children, handleAddItemToCart }) {
    //Create state to store the grouped products
    const [products, setProducts] = useState([]);
    //run this effect whenever the inventory prop changes
    useEffect(() => {
        //create an empty array to build our grouped products
        const workingProducts = [];
        //loop through each item in the inventory 
        inventory.forEach((item) => {
            //skip items that are not in stock
            if (!item.inStock) {
                return; //skip to next item
            }
            //check if we already have a product with this baseName
            if (
                !workingProducts.find((productItem) => productItem.baseName === item.baseName,)
            ) {
                //NO MATCH FOUND: create a new product object
                workingProducts.push({
                    baseName:item.baseName,
                    price: item.price,
                    baseDescription: item.baseDescription,
                    variants: [{...item}], //start variants array with this item
                });
            } else {
                //MATCH FOUND: add this item to existing product's variants 
                //find the index of the existing product
                const index = workingProducts.findIndex((productItem) => productItem.baseName === item.baseName,
                );
                workingProducts[index].variants.push({...item});
            }

        });
        //update state with the grouped products
        setProducts([...workingProducts]);
    }, [inventory]);


    return(
        <ul>
            {children}
            {products.map((product, index) => {
                return(
                    <ProductCard
                        key={`${product.baseName}-${index}`}
                        baseName={product.baseName}
                        baseDescription={product.baseDescription}
                        variants={product.variants} //pass variants array
                        handleAddItemToCart={handleAddItemToCart}
                    />
                );
            })}
        </ul>
    );
}

export default ProductList;