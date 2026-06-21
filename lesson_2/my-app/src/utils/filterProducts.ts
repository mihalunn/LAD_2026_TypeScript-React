import { IProduct } from "../types";

// фильтр по названию
const filterByTitle = (products: IProduct[], searchValue: string) => {    
    const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filtered;
};


// фильтр по категории
const filterByCategory = (products: IProduct[], category: string) => {
    const filtered = products.filter(product =>
        category === 'all' || product.category === category        
    );

    return filtered;
};


export { filterByTitle };
export { filterByCategory };