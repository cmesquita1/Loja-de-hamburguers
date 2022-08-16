import { CartDiv, TotalPrice } from "./style";

export default function Cart({
  currentSale,
  vazio = false,
  cartTotal,
  removeCart,
  removeAllItems,
}) {
  if (vazio === false) {
    return (
      <div className="cartItem">
        <CartDiv style={{ background: "#f5f5f5" }}>
          <div className="cartTitle">
            <h3>Shopping cart</h3>
          </div>
          <div className="cartItemsWithContent">
            {currentSale.map((elem, index) => (
              <div className="item" key={index}>
                <div className="itemStyle">
                  <img src={elem.img} alt="item" />
                  <div className="itemInfo">
                    <h3 id={elem.id}>{elem.name}</h3>
                    <small>{elem.category}</small>
                  </div>
                </div>
                <button onClick={() => removeCart(elem.id)}>Remove</button>
              </div>
            ))}
          </div>
        </CartDiv>
        <TotalPrice>
          <div className="totalPriceValue">
            <p>Total</p>
            <p>R$: {Number(cartTotal).toFixed(2)}</p>
          </div>
          <button onClick={() => removeAllItems()}>Remove all items</button>
        </TotalPrice>
      </div>
    );
  } else {
    return (
      <CartDiv>
        <div className="cartTitle">
          <h3>Shopping cart</h3>
        </div>
        <div className="cartItems">
          <h3>Your cart is empty</h3>
          <small>Add some items</small>
        </div>
      </CartDiv>
    );
  }
}
