import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

//TEMPORARY
const products:ProductsType = [
  {
    "id": 1,
    "name": "Adidas CoreFit T-Shirt",
    "shortDescription": "Comfortable Adidas T-shirt for everyday wear.",
    "description": "A stylish and comfortable Adidas CoreFit T-Shirt made from soft, breathable fabric. Perfect for workouts, casual outings, and everyday use.",
    "price": 39.9,
    "sizes": ["s", "m", "l", "xl", "xxl"],
    "colors": ["gray", "purple", "green"],
    "images": {
      "gray": "/products/1g.png",
      "purple": "/products/1p.png",
      "green": "/products/1gr.png"
    }
  },
  {
    "id": 2,
    "name": "Nike AirMax Sneakers",
    "shortDescription": "Lightweight sneakers with excellent cushioning.",
    "description": "Nike AirMax Sneakers combine modern style with superior comfort. Featuring a cushioned sole and breathable upper, these sneakers are ideal for walking, running, and everyday activities.",
    "price": 89.99,
    "sizes": ["39", "40", "41", "42", "43", "44"],
    "colors": ["black", "white", "blue"],
    "images": {
      "black": "/products/2b.png",
      "white": "/products/2w.png",
      "blue": "/products/2bl.png"
    }
  },
  {
    "id": 3,
    "name": "Puma Essentials Hoodie",
    "shortDescription": "A cozy hoodie with a modern, relaxed fit.",
    "description": "The Puma Essentials Hoodie is designed for comfort and versatility. Made with soft fabric, an adjustable hood, and a convenient front pocket, it is perfect for cool weather, travel, and casual styling.",
    "price": 59.5,
    "sizes": ["s", "m", "l", "xl", "xxl"],
    "colors": ["black", "gray", "red"],
    "images": {
      "black": "/products/3b.png",
      "gray": "/products/3g.png",
      "red": "/products/3r.png"
    }
  },
  {
    "id": 4,
    "name": "Levi's Classic Denim Jeans",
    "shortDescription": "Classic denim jeans for timeless everyday style.",
    "description": "Levi's Classic Denim Jeans offer a versatile design with durable denim fabric and a comfortable fit. Easy to pair with T-shirts, shirts, and sneakers for casual or smart-casual outfits.",
    "price": 74.99,
    "sizes": ["28", "30", "32", "34", "36"],
    "colors": ["blue", "black", "lightblue"],
    "images": {
      "blue": "/products/4bl.png",
      "black": "/products/4b.png",
      "lightblue": "/products/4lb.png"
    }
  }
]


const ProductList = () => {
    return (
    <div className="w-full ">
      <Categories />

       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
       </div>
    );
};

export default ProductList;