import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Purple Kurta for boys",
    price: 699,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRZ07wiNu_io6GTaTIhvSVVTeBShKNa0h2g&s",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Boys Shorts (Sets of 5)",
    price: 1059,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcvIYlOAbgwoSRp2nFvNmhbfDGPrKxTxb1NsYH3isZWeIYC5Ehe1xKlRO8lzMRDiSwW7wA24-qQfw5pVfL4Gcchau4jxR1lTab7f5MZhZ3epP1JAtYK9VxoA",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Spiderman Bape Suit",
    price: 6499,
    image: "https://i.ebayimg.com/images/g/XT0AAOSwst5k5HM5/s-l400.jpg",
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 4,
    name: "5pc Suit",
    price: 4599,
    image: "https://m.media-amazon.com/images/I/61523NJGESL._AC_UY1100_.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Dark Blue Night Suit",
    price: 399,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/night-suit/p/l/h/12-13-years-bkt-ns-a22860-under-fourteen-only-original-imagg7ggdzwrudhe.jpeg?q=90&crop=false",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Sneakers",
    price: 2799,
    image: "https://assets.ajio.com/medias/sys_master/root/20240926/JKei/66f511bdf9b8ef490b6ad6f3/-473Wx593H-466324904-black-MODEL.jpg",
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 7,
    name: "Teens Sweatshirt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Shirt for Teens",
    price: 649,
    image: "https://teentrums.com/cdn/shop/files/TT04ROGABWSH03.png?v=1715411579&width=1080",
    sizes: ["15", "15.5", "16", "16.5", "17"],
  },
];

const Boys = () => {
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

export default Boys;