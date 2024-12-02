import ProductCard from './ProductCard';

const LoadCards = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map((d) => (
        <ProductCard
          key={d.id}
          productId={d.id}
          imgTitle={`${d.title}`}
          imgUrl={d.image}
          price={d.price}
        />
      ))}
    </div>
  );
};

export default LoadCards;
