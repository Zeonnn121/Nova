import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Black Oversized Hoodie",
    price: 699,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeE4m8oxl4YZn2-2FVfY6rUqBruJOwg9qLvmc-OdxDyBCMo5OyOK-P50glJHLnEE97uJpLTuXTex7Xo-gaPa5HtNHej7ZKbo2Fyy4KDkUZ-OqfiOGo8IyKQSs",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "White Cotton T-Shirt",
    price: 299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 499,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 4,
    name: "Casual Blazer",
    price: 1299,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Grey Slim Fit Turtlleneck Sweater",
    price: 39.99,
    image: "https://www.snitch.co.in/cdn/shop/files/b86df36734da47148f8059087a0cfb4c.jpg?v=1735973164",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Leather Sneakers",
    price: 1799,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 7,
    name: "Hooded Sweatshirt",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Formal Dress Shirt",
    price: 599,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    sizes: ["15", "15.5", "16", "16.5", "17"],
  },
];

const Mens = () => {
  const [selectedSizes, setSelectedSizes] = React.useState<{ [key: number]: string }>({});

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const handleAddToCart = (productId: number) => {
    if (!selectedSizes[productId]) {
      alert("Please select a size first");
      return;
    }
    // Add to cart logic here
    alert(`Added to cart! Size: ${selectedSizes[productId]}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Men's Collection</h1>
        <div className="flex gap-4">
          <select className="border rounded-md px-3 py-2">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
          <select className="border rounded-md px-3 py-2">
            <option>Filter</option>
            <option>T-Shirts</option>
            <option>Shirts</option>
            <option>Pants</option>
            <option>Jackets</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-xl font-bold text-purple-600 mt-2">₹{product.price}</p>
              
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Select Size:</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(product.id, size)}
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedSizes[product.id] === size
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(product.id)}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;