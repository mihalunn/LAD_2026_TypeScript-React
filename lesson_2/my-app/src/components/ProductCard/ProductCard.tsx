import {IProduct} from "../../types";

interface IProductCard {
    product: IProduct;
}

const ProductCard = ( {product}: IProductCard  ) => {


    return (
        <article>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
            <p>{product.description}</p>
        </article>
    )
}

export default ProductCard;