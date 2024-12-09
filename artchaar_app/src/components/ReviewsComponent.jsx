import { useState } from 'react';
import { Star, MessageCircle, User } from 'lucide-react';

const ReviewsComponent = () => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Lethabo Touch', content: 'Amazing flavor, I really enjoyed "le e babayo"!' },
    { id: 2, name: 'Thuso Zulu', content: 'Great taste and quick delivery.' },
  ]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `New Review for Mama's Archaar:\n${review}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '2769 248 9903'; // Replace with your WhatsApp number

    // Open WhatsApp with pre-filled review message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setReview('');
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
          <Star size={48} className="mx-auto mb-4 text-red-900" />
          <h1 className="text-3xl font-quicksand font-bold text-red-900 mb-2">
            Reviews for Mama's Archaar
          </h1>
          <p className="text-gray-700 font-lora">
            Share your experience and see what others are saying!
          </p>
        </div>

        {/* Review Form */}
        <form onSubmit={handleReviewSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="review"
              className="absolute -top-2 left-4 bg-white px-2 text-sm text-gray-600 font-lora"
            >
              Leave a Review
            </label>
            <div className="flex items-start border-2 border-red-900/30 rounded-xl overflow-hidden">
              <span className="pl-4 pt-3 text-red-900">
                <MessageCircle size={20} />
              </span>
              <textarea
                id="review"
                name="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                className="w-full p-3 pl-2 font-lora focus:outline-none bg-transparent min-h-[100px]"
                placeholder="Write your review here..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-900 text-white p-3 rounded-full 
            font-quicksand font-bold text-lg hover:bg-red-800 
            transition-colors flex items-center justify-center space-x-2
            transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <span>Send Review on WhatsApp</span>
          </button>
        </form>

        {/* Display Reviews */}
        <div className="mt-8">
          <h2 className="text-2xl font-quicksand font-bold text-red-900 mb-4">
            What Others Are Saying
          </h2>
          <div className="space-y-4">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="p-4 bg-white rounded-xl shadow-md border-2 border-red-900/10"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <User size={20} className="text-red-900" />
                  <span className="font-quicksand font-bold text-red-900">
                    {r.name}
                  </span>
                </div>
                <p className="font-lora text-gray-700">{r.content}</p>
              </div>
            ))}
          </div>
        </div>
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
};

export default ReviewsComponent;
