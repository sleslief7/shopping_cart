import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2>Error Page</h2>
      <Link to="/">
        <button> Back to home </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
