import { Card } from "./style";

export default function Product({ products, handleClick }) {
  return (
    <Card>
      <div className="productImage">
        <img src={products.img} alt="item" />
      </div>
      <div className="productDetail">
        <h3 id={products.id}>{products.name}</h3>
        <small>{products.category}</small>
        <p>R$ {Number(products.price).toFixed(2)}</p>
        <button onClick={() => handleClick(products.id)}>Add to cart</button>
      </div>
    </Card>
  );
}
