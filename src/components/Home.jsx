import { useLoaderData } from 'react-router-dom';
import LoadCards from './LoadCards';

const Home = () => {
  const data = useLoaderData();
  if (data.length === 0) {
    return <div> ERROR 404 NOT FOUND </div>;
  }
  return (
    <div>
      <LoadCards data={data} />
    </div>
  );
};

export default Home;
