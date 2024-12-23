import { useState } from 'react';

const QuantityInput = (props) => {
  const [inputQuantity, setInputQuantity] = useState(1);
  const { productId, cartItems, setCartItems } = props;

  function handleAddToCart() {
    const currentItem = cartItems.find((item) => item.id === productId);
    const newQuantity = currentItem
      ? Math.min(10, currentItem.quantity + inputQuantity)
      : 1;

    if (!currentItem) {
      setCartItems([
        ...cartItems,
        { id: Number(productId), quantity: newQuantity },
      ]);
    } else {
      const itemsCopy = [...cartItems];
      const currItem = itemsCopy.find((item) => item.id === productId);
      currItem.quantity = newQuantity;
      setCartItems(itemsCopy);
    }
  }

  function handleAddQuantity() {
    setInputQuantity(inputQuantity + 1);
    if (inputQuantity >= 10) {
      setInputQuantity(10);
    }
  }
  function handleSubtractQuantity() {
    setInputQuantity(inputQuantity - 1);
    if (inputQuantity <= 1) {
      setInputQuantity(1);
    }
  }

  return (
    <div className="quantity-container">
      <div className="quantity-input-container">
        <button className="minus-btn" onClick={handleSubtractQuantity}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <input
          className="quantity-input"
          type="text"
          value={inputQuantity}
          onChange={(e) => setInputQuantity(e.target.value)}
        />
        <button className="plus-btn" onClick={handleAddQuantity}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <button
        className="add-to-cart-btn"
        id={props.productId}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default QuantityInput;
