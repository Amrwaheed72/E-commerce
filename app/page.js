import { fetchProducts } from './_services/api';

export default async function Home() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div>amr waheed</div>

  );
}
