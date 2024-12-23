const QuantityInput = (props) => {
  const handleQuantity = () => {};
  return (
    <div className="quantity-input-container">
      <button className="minus-btn">
        <i className="fa-solid fa-minus"></i>
      </button>
      <input
        className="quantity-input"
        type="text"
        onChange={handleQuantity}
        value={1}
      />
      <button className="plus-btn">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantityInput;
