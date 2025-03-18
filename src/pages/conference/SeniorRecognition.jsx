export default function SeniorRecognition() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Added Image */}
        <div className="mb-8 rounded-lg overflow-hidden w-full md:w-1/2 mx-auto">
          <img 
            src="https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d87e037a118648c879e6c4.png"
            alt="Senior/Graduate Recognition Program"
            className="w-full h-auto object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-8">Senior/Graduate Recognition Program</h1>

        {/* Eligibility Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Eligibility Requirements</h2>
          <ul className="space-y-4 text-gray-700">
            <li>Must be a 2025 high school graduate</li>
            <li>Must be attending the 2025 FSY4CC Conference</li>
            <li>Must submit all required documentation by the deadline</li>
          </ul>
        </div>

        {/* Recognition Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Recognition Process</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Seniors will be recognized during a special ceremony at the conference. 
              Each senior will receive:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Special recognition during the conference</li>
              <li>Certificate of achievement</li>
              <li>Feature in the conference program</li>
            </ul>
          </div>
        </div>

        {/* Registration Button */}
        <div className="text-center">
          <a 
            href="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d1746e913827432be66993.pdf"
            download="Senior_Recognition_Form.pdf"
            className="bg-black text-white px-8 py-4 rounded-full inline-block hover:bg-gray-800 transition text-lg"
          >
            Download Senior Recognition Form
          </a>
        </div>
      </div>
    </div>
  )
}
