import { fetchProducts } from './_services/api';
import useStore from './store';

export default async function Home() {
  const products = await fetchProducts();
  console.log(products);
  // const increaseCart = useStore((state) => state.increaseCart)
  return (
    <div>
      awaaaaaaaaaaaaaaaa
      {/* <button onClick={increaseCart}>
        hi
      </button> */}
    </div>

  );
}
// 'use client'; // 1. IMPORTANT: Make it a Client Component

// import { useTranslation } from 'react-i18next'; // 2. Import the hook

// export default function HomePage() {
//   // 3. Use the hook to get the 't' function
//   const { t } = useTranslation('common'); // Specify the 'common' namespace

//   return (
//     <div>
//       <h1>{t('welcome_message')}</h1>
//       <input type="search" placeholder={t('search_placeholder')} />
//       <button>{t('add_to_cart')}</button>
//     </div>
//   );
// }
