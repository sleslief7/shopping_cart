import QuantityInput from './QuantityInput';

const ProductCard = (props) => {
  const { imgTitle, imgUrl, price } = props;

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
      <QuantityInput {...props} />
    </div>
  );
};

export default ProductCard;
