import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Category = () => {
  const { res, id } = useLoaderData();
  const products = res.filter((product) => product.category.id === id);
  return (
    <>
      {products.map((product) => {
        <ProductCard
          key={product.id}
          imgTitle={product.title}
          imgUrl={product.images[0]}
          price={product.price}
        />;
      })}
    </>
  );
};

export async function ProductsLoader({ props }) {
  const id = props.id;
  const res = await fetch('https://api.escuelajs.co/api/v1/products/').then(
    (res) => res.json()
  );
  return { res, id };
}

export default Category;
