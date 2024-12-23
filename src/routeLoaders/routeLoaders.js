export async function fetchCartItems() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error('Products not found');
  }
  return await res.json();
}

export async function fetchCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return await res.json();
}

export async function fetchProducts({ params }) {
  const { category } = params;
  let res;
  if (!category) {
    res = await fetch(`https://fakestoreapi.com/products`);
  } else {
    res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch ${category}'s products`);
  }

  return await res.json();
}
