export interface IProduct {
    id: number;
    image?: string; // браузер ругался, тк я добавил image в интерфейс IProduct, но в моках этого поля нет - сделал его опциональным
    title: string;
    category: string;
    description: string;
    price: number;
    inStock: boolean;
}