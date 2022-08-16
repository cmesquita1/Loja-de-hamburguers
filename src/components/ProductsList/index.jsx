import Product from "../Product";
import { Main } from "./style";

export default function ProductList({
  products,
  filteredProducts,
  handleClick,
}) {
  return (
    <Main>
      {(filteredProducts.length > 0 ? filteredProducts : products).map(
        (elem) => (
          <Product key={elem.id} products={elem} handleClick={handleClick} />
        )
      )}
    </Main>
  );
}
