import { getCategoriesWithImages } from "../_services/api";
import { LandingPageClient } from "./landing-page-client";

export default async function Home() {
    const categories = await getCategoriesWithImages()
    return <LandingPageClient categories={categories} />;
}