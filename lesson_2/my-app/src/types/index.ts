export interface IProduct {
    id: number;
    image?: string; // у меня TS ругался, тк я добавил image в интерфекс IProduct, но в моках этого поля нет - сделал его опциональным
    title: string;
    category: string;
    description: string;
    price: number;
    inStock: boolean;
}