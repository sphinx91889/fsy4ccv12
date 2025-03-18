import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ConferenceInfo() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source 
          src="https://videos.pexels.com/video-files/1918465/1918465-uhd_2560_1440_24fps.mp4" 
          type="video/mp4" 
        />
      </video>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <img 
              src="https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d8bec8ac48a5404d65bb05.png"
              alt="Youth Conference"
              className="w-full max-w-md"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-center">Join hundreds of youth from across Florida & Georgia for four days of fellowship, worship, and spiritual growth.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl">📅</span>
                </div>
                <p>June 25-28, 2025</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl">⏰</span>
                </div>
                <p>Registration opens April 1st</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl">📍</span>
                </div>
                <p>Winter Haven, Florida</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link 
                to="/conference/registration" 
                className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
