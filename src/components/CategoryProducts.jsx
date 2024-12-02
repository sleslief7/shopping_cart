import { useLoaderData } from 'react-router-dom';
import LoadCards from './LoadCards';

const CategoryProducts = () => {
  return <LoadCards data={useLoaderData()} />;
};

export default CategoryProducts;
