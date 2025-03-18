export default function Hotel() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Hotel/Lodging Information</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          {/* Hotel Image */}
          <div className="mb-8 rounded-lg overflow-hidden w-full md:w-1/2 mx-auto">
            <img 
              src="https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d85b741b97accb2d035930.webp"
              alt="Staybridge Suites Winter Haven"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Hotel Contact Information */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Staybridge Suites Winter Haven - Auburndale</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <a href="tel:863-229-5145" className="hover:text-blue-600 transition">
                  Office: 863-229-5145
                </a>
              </p>
              <p>305 5th St. NW Avenue D</p>
              <p>Winter Haven, FL 33881</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Conference Hotel</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rate Information and Reservation */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Room Rate</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$159<span className="text-lg text-gray-600">/night</span></div>
              <p className="text-red-600 font-semibold mb-6">
                Booking Deadline: May 23, 2025
              </p>
              
              {/* Moved Reservation Instructions here */}
              <div className="border-t pt-6">
                <h3 className="font-bold mb-4">How to Reserve</h3>
                <p className="text-gray-700 mb-4">
                  Reserve your rooms by clicking the booking link below or calling the hotel directly.
                </p>
                <a 
                  href="https://www.staybridge.com/redirect?path=asearch&brandCode=SB&localeCode=en&regionCode=1&hotelCode=GIFWH&checkInDate=25&checkInMonthYear=052025&checkOutDate=28&checkOutMonthYear=052025&rateCode=6CBARC&_PMID=99801505&GPC=FYC&cn=no&viewfullsite=true"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  Book Online
                </a>
              </div>
            </div>

            {/* Room Features */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Room Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 2 Queen beds with sleeper sofa</li>
                <li>• Full kitchen</li>
                <li>• Hot breakfast included</li>
                <li>• In-room coffee maker</li>
                <li>• Refrigerator</li>
                <li>• Microwave</li>
              </ul>
            </div>
          </div>

          {/* Check-in Information */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Check-in/Check-out Times</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Check-in Time:</p>
                <p className="text-gray-700">4:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Check-out Time:</p>
                <p className="text-gray-700">11:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
          <h2 className="text-xl font-bold mb-4 text-yellow-800">Important Notes</h2>
          <ul className="space-y-2 text-yellow-800">
            <li>• Room block rates are available on a first-come, first-served basis</li>
            <li>• Make your reservations early to ensure availability</li>
            <li>• Mention "FSY4CC Conference" when booking to receive the special rate</li>
            <li>• All reservations must be made by May 23, 2025</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
