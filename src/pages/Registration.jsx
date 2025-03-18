import React from 'react'

export default function Registration() {
  const handleGroupRegistration = (event) => {
    event.preventDefault();
    window.open('https://resonant-daffodil-d3cc1d.netlify.app', '_blank', 'noopener,noreferrer');
  }

  const handleIndividualRegistration = (event) => {
    event.preventDefault();
    window.open('https://api.leadconnectorhq.com/widget/form/nNg44FxPrNUqVcZpwaT6', '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Registration</h1>
      
      <div className="space-y-4">
        <p className="mb-4">Choose your registration type:</p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={handleIndividualRegistration}
            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Register as Individual
          </button>
          
          <button 
            onClick={handleGroupRegistration}
            className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Register a Group
          </button>
        </div>
      </div>
    </div>
  )
}
