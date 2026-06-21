import {IProduct} from "../../types";
import ProductCard from "../ProductCard/ProductCard";

interface IProductListProps {
    products: IProduct[];
}

//немного стилей, чтобы получше смотрелось:
const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
    listStyle: 'none',
    padding: 0,
    margin: 0
};

const ProductList = ({products}:IProductListProps) => {

    if ( products.length === 0 ) {
        return <p>No products found</p>;
    }


    return (
        <section>
            <h2>Products</h2>
            <ul style={gridStyle}>
                {products.map((product) => (
                    <li>
                        <ProductCard key={product.id} product={product} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProductList;