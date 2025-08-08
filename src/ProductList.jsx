import ProductCard from './ProductCard';

function ProductList({ inventory, children, handleAddItemToCart }) {
    return(
        <ul>
            {children}
            {inventory.map((item) => {
                return(
                    <ProductCard
                        key={item.id}
                        baseName={item.baseName}
                        baseDescription={item.baseDescription}
                        handleAddItemToCart={handleAddItemToCart}
                        id={item.id}
                    />
                );
            })}
        </ul>
    );
}

export default ProductList;