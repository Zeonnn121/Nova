import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ivory Magenta Silk Couple Outfit",
    price: 4999,
    image: "https://www.apella.in/cdn/shop/files/MerryMagentaJacquardSilkSuit_R_2.jpg?v=1727410288&width=1946",
    sizes: ["XS/S", "M/L", "XL/XXL"],
  },
  {
    id: 2,
    name: "Couple Hoodies Set",
    price: 1899,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqOEPEvWgsYVPOjLV02B2qulfZwJRGyfVzA&s",
    sizes: ["S/S", "M/M", "L/L", "XL/XL"],
  },
  {
    id: 3,
    name: "Valentine's T-Shirt Set",
    price: 2499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacA2XAY2_zfzjuYCuNbpBsrdwXbzjwXhqBw&s",
    sizes: ["S/S", "M/M", "L/L"],
  },
  {
    id: 4,
    name: "Matching Sneakers",
    price: 5499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRG_gbbe2UYZrlwdofUoOYCWQvISQNCM3YQ&s",
    sizes: ["7/5", "8/6", "9/7", "10/8"],
  },
  {
    id: 5,
    name: "Matching accessories for couples",
    price: 349,
    image: "https://m.media-amazon.com/images/I/41QQsDLZvQL._AC_UY1100_.jpg",
    sizes: ["One Size"],
  },
  {
    id: 6,
    name: "Couple Watches Set",
    price: 7499,
    image: "https://m.media-amazon.com/images/I/617iN+TXa4L._AC_UY1000_.jpg",
    sizes: ["One Size"],
  },
  {
    id: 7,
    name: "Blue Loma Indie Lines Long Couple Set",
    price: 2680,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU70Mg-2oM9vMvmE_-uMLF0ccAEZT0AqvXXw&s",
    sizes: ["S/S", "M/M", "L/L"],
  },
  {
    id: 8,
    name: "Matching Pajamas",
    price: 1699,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdQ6q0BfMcMn7_8_VAddxgAiw6a3rcoQjIw&s",
    sizes: ["S/S", "M/M", "L/L", "XL/XL"],
  },
];

const Couple = () => {
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
    alert(`Added to cart! Size: ${selectedSizes[productId]}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Couple Collection</h1>
        <div className="flex gap-4">
          <select className="border rounded-md px-3 py-2">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
          <select className="border rounded-md px-3 py-2">
            <option>Filter</option>
            <option>Matching Sets</option>
            <option>Accessories</option>
            <option>Special Occasions</option>
            <option>Casual Wear</option>
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
                <p className="text-sm text-gray-600 mb-2">Select Size (His/Hers):</p>
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

export default Couple;