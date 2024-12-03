import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const data = useLoaderData();
  const items = data.filter((d) =>
    cartItems.some((item) => item.itemId === d.id)
  );
  let quantity = Array.from({ length: 10 }, (_, i) => i + 1);
  if (items.length === 0) return <h2> Your Cart is empty</h2>;

  function handleDeleteItem(id) {
    setCartItems([...cartItems.filter((item) => item.itemId !== id)]);
  }

  function handleSelectChange(id, newQuantity) {
    let updatedCartItems = [...cartItems];
    const ItemIndex = updatedCartItems.findIndex((item) => item.id === id);
    updatedCartItems[ItemIndex] = { itemId: id, quantity: newQuantity };
    setCartItems(updatedCartItems);
  }

  return (
    <div>
      {items.map((item) => {
        const cartItem = cartItems.find((c) => c.itemId === item.id);
        return (
          <div key={`item-${item.id}`} className="cart-item">
            <div className="cart-item-img-container">
              <img
                src={item.image}
                alt={item.title}
                title={item.title}
                className="product-img"
              />
              <figcaption className="img-title">{item.title}</figcaption>
            </div>
            <div className="price-quantity-delete">
              <p className="item-price">${item.price}</p>
              <div className="quantity-select">
                <label>Quantity: </label>
                <select
                  name="quantity"
                  id={`${item.id}-quantity`}
                  value={cartItem.quantity}
                  onChange={(e) => {
                    handleSelectChange(item.id, e.target.value);
                  }}
                >
                  {quantity.map((el) => {
                    return (
                      <option value={el} key={el}>
                        {' '}
                        {el}{' '}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                onClick={(e) => handleDeleteItem(item.id)}
                id={item.id}
                className="delete-btn"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export async function fetchCartItems() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error('Products not found');
  }
  return await res.json();
}
export default Cart;
