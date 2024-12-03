import ProductCard from './ProductCard';

const LoadCards = (props) => {
  return (
    <div className="cards-container">
      {props.data.map((d) => (
        <ProductCard
          key={d.id}
          productId={d.id}
          imgTitle={`${d.title}`}
          imgUrl={d.image}
          price={d.price}
          {...props}
        />
      ))}
    </div>
  );
};

export default LoadCards;
