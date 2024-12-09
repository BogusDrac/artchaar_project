import { useState } from 'react';
import { ClipboardPen, ShoppingCart, User, Phone, MapPin } from "lucide-react";

const OrderComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    flavor: 'spicy',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `New Order from Mama's Archaar:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Address: ${formData.address}
- Flavor: ${formData.flavor}
- Quantity: ${formData.quantity}
- Total Price: R${50 * formData.quantity}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your actual WhatsApp number (include country code)
    const phoneNumber = '2769 248 9903'; // Replace with your actual WhatsApp number
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E0] to-[#FFE5B4] py-16 px-4">
      {/* Top Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none" 
          className="text-white/10 fill-current"
        >
          <path d="M0,0 C720,60 1440,0 1440,0 L1440,60 L0,60 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-lg bg-white/30 rounded-2xl shadow-2xl p-8 relative z-10">
        <div className="text-center mb-8">
          <ClipboardPen 
            size={48} 
            className="mx-auto mb-4 text-red-900" 
          />
          <h1 className="text-3xl font-quicksand font-bold text-red-900 mb-2">
            Order Mama's Archaar
          </h1>
          <p className="text-gray-700 font-lora">
            Each jar is priced at R50. Choose your favorite flavor!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label 
              htmlFor="name" 
              className="absolute -top-2 left-4 bg-white px-2 text-sm text-gray-600 font-lora"
            >
              Full Name
            </label>
            <div className="flex items-center border-2 border-red-900/30 rounded-full overflow-hidden">
              <span className="pl-4 text-red-900">
                <User size={20} />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 pl-2 font-lora focus:outline-none bg-transparent"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div className="relative">
            <label 
              htmlFor="phone" 
              className="absolute -top-2 left-4 bg-white px-2 text-sm text-gray-600 font-lora"
            >
              Phone Number
            </label>
            <div className="flex items-center border-2 border-red-900/30 rounded-full overflow-hidden">
              <span className="pl-4 text-red-900">
                <Phone size={20} />
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full p-3 pl-2 font-lora focus:outline-none bg-transparent"
                placeholder="Enter 10-digit phone number"
              />
            </div>
          </div>

          {/* Address Input */}
          <div className="relative">
            <label 
              htmlFor="address" 
              className="absolute -top-2 left-4 bg-white px-2 text-sm text-gray-600 font-lora"
            >
              Delivery Address
            </label>
            <div className="flex items-start border-2 border-red-900/30 rounded-xl overflow-hidden">
              <span className="pl-4 pt-3 text-red-900">
                <MapPin size={20} />
              </span>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-3 pl-2 font-lora focus:outline-none bg-transparent min-h-[100px]"
                placeholder="Enter your full delivery address"
              />
            </div>
          </div>

          {/* Flavor Selection */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-lora">
              Select Flavor
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="flavor"
                  value="spicy"
                  checked={formData.flavor === 'spicy'}
                  onChange={handleChange}
                  className="text-red-900 focus:ring-red-900"
                />
                <span className="font-lora">Spicy</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="flavor"
                  value="mild"
                  checked={formData.flavor === 'mild'}
                  onChange={handleChange}
                  className="text-red-900 focus:ring-red-900"
                />
                <span className="font-lora">Mild</span>
              </label>
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="space-y-2">
            <label htmlFor="quantity" className="block text-gray-700 font-lora">
              Quantity (R50 per jar)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="10"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-3 border-2 border-red-900/30 rounded-full font-lora focus:outline-none"
            />
          </div>

          {/* Total Price Display */}
          <div className="text-center font-quicksand font-bold text-xl text-red-900">
            Total Price: R{50 * formData.quantity}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-900 text-white p-3 rounded-full 
            font-quicksand font-bold text-lg hover:bg-red-800 
            transition-colors flex items-center justify-center space-x-2
            transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart size={24} />
            <span>Order on WhatsApp</span>
          </button>
        </form>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg 
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none" 
          className="text-white/10 fill-current"
        >
          <path d="M0,0 C720,60 1440,0 1440,0 L1440,60 L0,60 Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default OrderComponent;