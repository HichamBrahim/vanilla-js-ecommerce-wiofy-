     export const getProducts = async () => {
        try {
            let response = await fetch('data/products.json');
            let data = await response.json();
            let products = JSON.parse(data);
            return products;
        }
        catch(error) {
            console.log(error);
        }
    }
    export const getCategories = async() => {
        try {
            let response = await fetch('data/categories.json');
            let data = await response.json();
            let categories = JSON.parse(data);
            return categories;
        }
        catch(error) {
            console.log(error);
        }
    }
