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

