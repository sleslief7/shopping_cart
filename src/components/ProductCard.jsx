const ProductCard = (props) => {
  const { imgTitle, imgUrl, price, productId } = props;
  return (
    <div className="card">
      <img
        src={imgUrl}
        alt={imgTitle}
        title="imgTitle"
        className="product-img"
      />
      <caption className="img-title">{imgTitle}</caption>
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

function handleAddToCart(e) {
  console.log(e.target.id);
}

export default ProductCard;
