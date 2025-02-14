import React from 'react';
import { Package, MapPin, CreditCard, Heart, LogOut } from 'lucide-react';
import './Profile.css'

const Profile = () => {
  const orders = [
    {
      id: 1,
      date: '2025-01-15',
      items: ['Blue Denim Jacket', 'White T-Shirt'],
      total: 1299,
      status: 'Delivered'
    },
    {
      id: 2,
      date: '2025-02-14',
      items: ['Black Jeans'],
      total: 699,
      status: 'Out For delivery'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-purple-600">JD</span>
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            
            <div className="mt-8 space-y-4">
              <button className="w-full flex items-center space-x-3 text-gray-700 hover:text-purple-600 py-2">
                <Package size={20} />
                <span>My Orders</span>
              </button>
              <button className="w-full flex items-center space-x-3 text-gray-700 hover:text-purple-600 py-2">
                <MapPin size={20} />
                <span>Addresses</span>
              </button>
              <button className="w-full flex items-center space-x-3 text-gray-700 hover:text-purple-600 py-2">
                <CreditCard size={20} />
                <span>Payment Methods</span>
              </button>
              <button className="w-full flex items-center space-x-3 text-gray-700 hover:text-purple-600 py-2">
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
              <button className="w-full flex items-center space-x-3 text-red-600 hover:text-red-700 py-2">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6">Recent Orders</h3>
            <div className="space-y-6">
              {orders.map(order => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold">Order #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <p key={index} className="text-gray-600">{item}</p>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t ">
                    <p className="font-semibold">Total: ₹{order.total}</p>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;