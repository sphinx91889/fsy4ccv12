import { motion } from 'framer-motion'

export default function Registration() {
  const handleIndividualRegistration = (event) => {
    event.preventDefault();
    window.open('https://api.leadconnectorhq.com/widget/form/nNg44FxPrNUqVcZpwaT6', '_blank', 'noopener,noreferrer');
  }

  const handleGroupRegistration = (event) => {
    event.preventDefault();
    window.open('https://resonant-daffodil-d3cc1d.netlify.app', '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Registration</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Individual Registration */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Individual Registration</h2>
            <p className="text-gray-600 mb-6">
              Register as an individual participant for the 2025 FSY4CC Conference. 
              Perfect for single attendees or those registering separately from their congregation.
            </p>
            <button 
              onClick={handleIndividualRegistration}
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
            >
              Register as Individual
            </button>
          </motion.div>

          {/* Congregational Registration */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Congregational Master List</h2>
            <p className="text-gray-600 mb-6">
              Register multiple participants from your congregation. 
              Ideal for church leaders registering groups of attendees together.
            </p>
            <button 
              onClick={handleGroupRegistration}
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
            >
              Register a Group
            </button>
          </motion.div>
        </div>

        {/* Important Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Important Registration Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-2">Registration Deadlines</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Early Bird Registration: April 1, 2025</li>
                <li>Regular Registration Deadline: June 15, 2025</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Required Documents</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Completed Registration Form</li>
                <li>Medical Release Form</li>
                <li>Parental Consent Form (if under 18)</li>
                <li>Code of Conduct Agreement</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Registration Fees</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ages 3-6 Rate: $50.00</li>
                <li>Ages 7+ Rate: $100.00</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Note:</strong> Registration fees are non-refundable but may be transferred to another participant 
                up to 30 days before the conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
