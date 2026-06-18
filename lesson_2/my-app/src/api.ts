const PRODUCTS_URL = "https://fakestoreapi.com/products";

const requestProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if(!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`); // делаю проверку сразу, на неё во всех гайдах обращают особое внимание
        }

        const data = await response.json();
        return data;

    } catch (err) {
        throw err;
    }
};

export { requestProducts }; // эту функцию импортирую в App.tsx и вызову в useEffect