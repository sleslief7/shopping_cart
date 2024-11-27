/* eslint-disable react/prop-types */
const ProductCard = (props) => {
  const { imgTitle, imgUrl, price } = props;
  return (
    <div className="card">
      <img src={imgUrl} alt={imgTitle} title="imgTitle" />
      <caption className="img-title">{imgTitle}</caption>
      <p className="item-price">{price}</p>
    </div>
  );
};

export default ProductCard;
