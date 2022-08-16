import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filter, setFilter] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  function handleClick(idProd) {
    const { id, name, category, price, img } = products.find(
      ({ id }) => id === idProd
    );
    const objectCart = { id, name, category, price, img };
    const isFound = currentSale.some((elem) => {
      if (elem.id === idProd) {
        return true;
      }
    });
    if (isFound === false) {
      setCurrentSale([...currentSale, objectCart]);
    }
  }

  function removeCart(idProd) {
    const cart = currentSale.filter((elem) => elem.id !== idProd);
    setCurrentSale(cart);
  }

  function removeAllItems() {
    setCurrentSale([]);
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (elem) =>
          elem.name.toLowerCase().includes(filter) ||
          elem.category.toLowerCase().includes(filter)
      )
    );
  }, [products, filter]);

  useEffect(() => {
    if (currentSale.length > 0) {
      setCartTotal(
        currentSale.reduce((previous, current) => {
          return previous + current.price;
        }, 0)
      );
    }
  }, [currentSale]);

  return (
    <div className="App">
      <Header setFilter={setFilter} />
      <div className="container">
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        {currentSale.length > 0 ? (
          <Cart
            currentSale={currentSale}
            cartTotal={cartTotal}
            removeCart={removeCart}
            removeAllItems={removeAllItems}
          />
        ) : (
          <Cart
            currentSale={currentSale}
            vazio
            cartTotal={cartTotal}
            removeCart={removeCart}
            removeAllItems={removeAllItems}
          />
        )}
      </div>
    </div>
  );
}

export default App;
