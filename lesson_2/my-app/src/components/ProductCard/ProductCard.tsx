import {IProduct} from "../../types";

interface IProductCardProps {
    product: IProduct;
}

// немного стиля...
const cardStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    background: 'white'
};

const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'contain'
};

const ProductCard = ( {product}: IProductCardProps ) => {


    return (
        <article style={cardStyle}>
            <img src={product.image} alt={product.title} style={imgStyle} />
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
            <p>{product.description}</p>
        </article>
    )
}

export default ProductCard;