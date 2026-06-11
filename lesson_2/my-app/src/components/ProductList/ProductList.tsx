import {IProduct} from "../../types";
import ProductCard from "../ProductCard/ProductCard";

interface IProductListProps {
    products: IProduct[];
}

const ProductList = ({products}:IProductListProps) => {

    if ( products.length === 0 ) {
        return <p>No products found</p>;
    }


    return (
        <section>
            <h2>Products</h2>
            <ul>
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