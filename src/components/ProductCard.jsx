const ProductCard = (props) => {
  const { imgTitle, imgUrl, price, productId, cartItems, setCartItems } = props;

  function handleAddToCart() {
    const currentItem = cartItems.find((item) => item.itemId === productId);
    const newQuantity = currentItem
      ? Math.min(10, currentItem.quantity + 1)
      : 1;

    if (!currentItem) {
      setCartItems([
        ...cartItems,
        { itemId: Number(productId), quantity: newQuantity },
      ]);
    } else {
      const itemsCopy = [...cartItems];
      const currItem = itemsCopy.find((item) => item.itemId === productId);
      currItem.quantity = newQuantity;
      setCartItems(itemsCopy);
    }
  }

  return (
    <div className="card">
      <img
        src={imgUrl}
        alt={imgTitle}
        title="imgTitle"
        className="product-img"
      />
      <figcaption className="img-title">{imgTitle}</figcaption>
      <p className="item-price">${price}</p>
      <button
        className="add-to-cart-btn"
        id={productId}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
