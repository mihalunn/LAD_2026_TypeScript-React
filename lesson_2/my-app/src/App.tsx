import ProductList from "./components/ProductList/ProductList";
// import {products} from "./mocks/products"; // закомментил свои моки
import { useEffect, useState} from "react";

const App = () => {

    const [isProductListVisible, setIsProductListVisible] = useState(false);
    const [count, setCount] = useState(0);

    const [products, setProducts] = useState([]); // вместо импорта, теперь это состояние
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); //дженерики для проверки, рез-т которой может быть как строка, так и null. Проверку instanceof ниже сделал потому, что TS ругался и я показал ему, что err - это объект ошибки

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');

                if(!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`); // делаю проверку сразу, на неё во всех гайдах обращают особое внимание
                }

                const data = await response.json();

                setProducts(data); // сохранил данные
                setIsLoading(false); // данные получены - отключаю загрузку

            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Неизвестная ошибка');
                }                
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []); // пустой массив для того, чтобы запрос выполнился только при загрузке
 
    function handleProductClick() {
        setIsProductListVisible((prevState) => !prevState);
        setCount(prevState => prevState + 1);
    }

    return (
        <div>
            <h1>Hi</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae earum modi soluta deserunt excepturi perferendis explicabo natus! Quisquam dicta reiciendis tenetur maiores voluptatibus illo nostrum nemo maxime nobis corrupti?</p>

            {isLoading ? <p>Загрузка товаров...</p> : null}
            {error ? <p>Ошибка: {error}</p> : null}
            {!isLoading && !error && (
                <div>
                    <button onClick={handleProductClick}>{isProductListVisible ? 
                    "Спрятать товары" : "Показать товары"}</button>

                    <p>{isProductListVisible}</p>
                    <p>Кликов: {count}</p>

                    {isProductListVisible ? (<ProductList products={products}/>) : null}
                    {/* проверил, всё работает, вернул обратно. Тернарник пока использую, т.к. с ним полегче воспринимается, чем && */}
                    {/* {isProductListVisible ? (<ProductList products={[]}/>) : null} */}
                </div>
            )}            
        </div>
    );
};

export default App