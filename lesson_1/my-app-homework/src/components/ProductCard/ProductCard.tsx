import {IProduct} from "../../types";

interface IProductCardProps {
    product: IProduct;
}

const ProductCard = ( {product}: IProductCardProps ) => {


    return (
        <article>
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
        </article>
    )
}

export default ProductCard;