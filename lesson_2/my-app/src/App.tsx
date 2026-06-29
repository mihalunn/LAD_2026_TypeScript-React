import ProductList from "./components/ProductList/ProductList";
// import {products} from "./mocks/products"; // закомментил свои моки
import { useEffect, useState, useRef } from "react";
import { requestProducts } from "./api";
import { handleError } from "./utils/errorHandler";
import { filterByTitle, filterByCategory } from "./utils/filterProducts";
import { IProduct } from "./types";
import { debounce } from "./utils/debounce";

const App = () => {
    // 1. СОСТОЯНИЯ
    const [isProductListVisible, setIsProductListVisible] = useState(false);
    const [count, setCount] = useState(0);

    const [products, setProducts] = useState<IProduct[]>([]); // вместо импорта, теперь это состояние
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(''); // до этого у меня было null и пришлось костылить дженериками <string | null>, а оно вон как просто оказалось)))
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]); //дженерик добавил после того, как TS начал ругаться при вызове setFilteredProducts(filtered);
    const [selectedCategory, setSelectedCategory] = useState('all');
    // const [timerId, setTimerId] = useState<number | null>(null);

    // 2. REFS
    const searchInputRef = useRef<HTMLInputElement>(null);
    const debouncedRef = useRef<(() => void) | null>(null);

    // 3. ЭФФЕКТЫ

        // для запроса
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await requestProducts();

                setProducts(data); // сохранил данные
                setFilteredProducts(data); // чтобы инициализировать отфильтрованные продукты при загрузке
                setIsLoading(false); // данные получены - отключаю загрузку

            } catch (err) {
                setError(handleError(err));
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // пустой массив для того, чтобы запрос выполнился только при загрузке

        // для фильтра по категории использую ранее созданную функцию applyFilters()
    useEffect(() => {
        applyFilters();
    },[selectedCategory]);

    // useEffect(() => {
    //     return () => {
    //         if (timerId) {
    //             clearTimeout(timerId);
    //         }
    //     };
    // }, [timerId]); 


    // 4. ОБРАБОТЧИКИ

        // счетчик кликов
    const handleProductClick = () => {
        setIsProductListVisible((prevState) => !prevState);
        setCount(prevState => prevState + 1);
    }

        // логика фильтров
    const applyFilters = () => {
        console.log('applyFilters вызвана:', new Date().toISOString());

        const searchValue = searchInputRef.current?.value || ''; // читаю значение из ref - если значение null или undefined, то используется пустая строка
        const filteredByTitle = filterByTitle(products, searchValue); 
        const filtered = filterByCategory(filteredByTitle, selectedCategory);
        setFilteredProducts(filtered);
    }

    if(!debouncedRef.current) {
        debouncedRef.current = debounce(applyFilters, 2000);
    }

    // const handleSearch = () => {
    //     if (timerId) {
    //         clearTimeout(timerId); 
    //     }

    //     setTimerId(window.setTimeout(() => {
    //         applyFilters();
    //     }, 500));
    // }

    // 5. RETURN (последним, т.к. ссылается на функции-обработчики)
    return (
        <div>
            <h1>Куча всевозможных товаров</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae earum modi soluta deserunt excepturi perferendis explicabo natus! Quisquam dicta reiciendis tenetur maiores voluptatibus illo nostrum nemo maxime nobis corrupti?</p>            

            {isLoading ? <p>Загрузка товаров...</p> : null}
            {error ? <p>Ошибка: {error}</p> : null}
            {!isLoading && !error && (
                <div>
                    <input 
                        ref = {searchInputRef}
                        type="text" 
                        placeholder="Поиск товаров..."
                        onChange={debouncedRef.current}
                    />

                    {/* с этим надо еще посидеть, делал на скорую руку, подключал нейронку */}
                    <select 
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        <option value="all">Все категории</option>
                        <option value="electronics">Электроника</option>
                        <option value="jewelery">Украшения</option>
                        <option value="mens_clothing">Мужская одежда</option>
                        <option value="womens_clothing">Женская одежда</option>
                    </select>

                    <button onClick={handleProductClick}>
                        {isProductListVisible ? "Спрятать товары" : "Показать товары"}
                    </button>

                    <p>{isProductListVisible}</p>
                    <p>Кликов: {count}</p>

                    {isProductListVisible ? (<ProductList products={filteredProducts}/>) : null}
                    {/* проверил, всё работает, вернул обратно. Тернарник пока использую, т.к. с ним полегче воспринимается, чем && */}
                    {/* {isProductListVisible ? (<ProductList products={[]}/>) : null} */}
                </div>
            )}            
        </div>
    );
};

export default App