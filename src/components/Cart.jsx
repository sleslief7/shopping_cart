import { useLoaderData } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const data = useLoaderData();
  const items = data.filter((d) =>
    cartItems.some((item) => item.itemId === d.id)
  );
  let quantity = Array.from({ length: 10 }, (_, i) => i + 1);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + findPrice(item.itemId) * item.quantity,
    0
  );
  const taxRate = 0.04;
  const taxes = (subtotal * taxRate).toFixed(2);
  const total = (subtotal * (1 + taxRate)).toFixed(2);

  if (items.length === 0) return <h2> Your Cart is empty</h2>;

  function findPrice(id) {
    return items.find((item) => item.id === id).price;
  }

  function handleDeleteItem(id) {
    setCartItems([...cartItems.filter((item) => item.itemId !== id)]);
  }

  function handleSelectChange(id, newQuantity) {
    let updatedCartItems = [...cartItems];
    const currItem = updatedCartItems.find((item) => item.itemId === id);
    currItem.quantity = newQuantity;
    setCartItems(updatedCartItems);
  }

  function handleCheckout() {
    setCartItems([]);
    alert('Your order is complete. Keep Shopping! Thank you for your order.');
  }

  return (
    <div id="cart-container">
      <div id="cart-items-container">
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
                      handleSelectChange(item.id, Number(e.target.value));
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
      {cartItems.length > 0 && (
        <div id="cart-total-container">
          <p>Subtotal: ${subtotal}</p>
          <p>Taxes: ${taxes}</p>
          <p>Total: ${total}</p>
          <button className="add-to-cart-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
