import ProductList from "./components/ProductList/ProductList";
import {products} from "./mocks/products";
import { useState} from "react";

const App = () => {

    const [isProductListVisible, setIsProductListVisible] = useState(false);
    const [count, setCount] = useState(0);
 
    function handleProductClick() {
        setIsProductListVisible((prevState) => !prevState);
        setCount(prevState => prevState + 1);
    }

    return (
        <div>
            <h1>Hi</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae earum modi soluta deserunt excepturi perferendis explicabo natus! Quisquam dicta reiciendis tenetur maiores voluptatibus illo nostrum nemo maxime nobis corrupti?</p>

            <div>
                <button onClick={handleProductClick}>{isProductListVisible ? 
                "Спрятать товары" : "Показать товары"}</button>

                <p>{isProductListVisible}</p>
                <p>Кликов: {count}</p>

                {isProductListVisible ? (<ProductList products={products}/>) : null}
                {/* проверил, всё работает, вернул обратно. Тернарник пока использую, т.к. с ним полегче воспринимается, чем && */}
                {/* {isProductListVisible ? (<ProductList products={[]}/>) : null} */}
            </div>
        </div>
    );
};

export default App