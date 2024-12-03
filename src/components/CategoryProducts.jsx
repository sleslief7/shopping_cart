import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import LoadCards from './LoadCards';

const CategoryProducts = (props) => {
  const { category } = useParams();
  const data = useLoaderData();

  if (data.length === 0) {
    return <NotFound category={category} />;
  }

  return <LoadCards data={data} {...props} />;
};

const NotFound = ({ category }) => {
  return <h2>404 {category} NOT FOUND</h2>;
};

export default CategoryProducts;
