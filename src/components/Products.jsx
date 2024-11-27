import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Products = () => {
  const categories = useLoaderData();

  return (
    <div id="products">
      <h1>Products categories</h1>
      <div id="categories">
        {categories.map((category) => {
          let name = category.name;
          name =
            name === 'Strapi Plugin'
              ? 'Clothes'
              : name === 'Change title'
              ? 'Furniture'
              : name;
          return (
            <>
              <Link key={`key-${category.id}`} id={category.id}>
                <h3>{name}</h3>
                <img src={category.image} alt={name} width={'130px'} />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export async function categoriesCall() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories?limit=4');
  if (!res.ok) {
    throw Error(`Could not find products' categories`);
  }
  return await res.json();
}

export default Products;
