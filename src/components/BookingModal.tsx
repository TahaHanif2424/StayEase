import { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

const BookingModal = ({ isOpen, onClose, planName }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    planName: planName,
    fullName: "",
    whatsapp: "",
    email: "",
    arrivalDate: "",
    numberOfDays: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, planName }));
  }, [planName]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Handle booking submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#002650] to-[#003870] p-5 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Book Your Stay</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          {/* Plan Name */}
          <div>
            <label
              htmlFor="planName"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Selected Plan
            </label>
            <input
              type="text"
              id="planName"
              name="planName"
              value={formData.planName}
              readOnly
              className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 font-semibold cursor-not-allowed text-sm"
            />
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300 text-sm"
              placeholder="Ahmed Khan"
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300 text-sm"
              placeholder="+92 300 1234567"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300 text-sm"
              placeholder="ahmed@example.com"
            />
          </div>

          {/* Date of Arrival */}
          <div>
            <label
              htmlFor="arrivalDate"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Date of Arrival *
            </label>
            <input
              type="date"
              id="arrivalDate"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300 text-sm"
            />
          </div>

          {/* Number of Days */}
          <div>
            <label
              htmlFor="numberOfDays"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Number of Days *
            </label>
            <input
              type="number"
              id="numberOfDays"
              name="numberOfDays"
              value={formData.numberOfDays}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#002650] focus:ring-2 focus:ring-[#002650]/20 outline-none transition-all duration-300 text-sm"
              placeholder="7"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#002650] text-white font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
