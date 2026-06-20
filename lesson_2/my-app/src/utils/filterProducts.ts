import { IProduct } from "../types";

const filterByTitle = (products: IProduct[], searchValue: string) => {    
    const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filtered;
};

export { filterByTitle };
