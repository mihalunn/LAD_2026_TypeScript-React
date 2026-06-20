import ProductList from "./components/ProductList/ProductList";
// import {products} from "./mocks/products"; // закомментил свои моки
import { useEffect, useState} from "react";
import { requestProducts } from "./api";
import { handleError } from "./utils/errorHandler";

const App = () => {

    const [isProductListVisible, setIsProductListVisible] = useState(false);
    const [count, setCount] = useState(0);

    const [products, setProducts] = useState([]); // вместо импорта, теперь это состояние
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(''); // до этого у меня было null и пришлось костылить дженериками <string | null>, а оно вон как просто оказалось)))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await requestProducts();

                setProducts(data); // сохранил данные
                setIsLoading(false); // данные получены - отключаю загрузку

            } catch (err) {
                setError(handleError(err));
                setIsLoading(false);
            }
        };

        fetchData();
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