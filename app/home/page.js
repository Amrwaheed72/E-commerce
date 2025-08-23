// app/page.js

import { fetchProducts } from "../_services/api";
import { LandingPageClient } from "./landing-page-client";

export default async function Home() {
    // const products = await fetchProducts()
    // console.log(products)
    return <LandingPageClient />;
}