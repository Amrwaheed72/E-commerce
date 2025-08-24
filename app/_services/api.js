export async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=194');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}

export async function getCategories() {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}

export async function getCategoriesWithImages() {
    try {
        // 1. Fetch categories
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        // 2. Fetch one product image for each category
        const categoriesWithImages = await Promise.all(
            data.map(async (category) => {
                try {
                    const prodRes = await fetch(category.url + "?limit=1"); // fetch first product
                    const prodData = await prodRes.json();
                    const image = prodData.products?.[0]?.images?.[0] || null;

                    return {
                        ...category,
                        image,
                    };
                } catch (err) {
                    console.error(`Failed to fetch image for ${category.name}`, err);
                    return { ...category, image: null };
                }
            })
        );
        return categoriesWithImages;
    } catch (error) {
        console.error("Failed to fetch categories:", error.message);
    }
}
