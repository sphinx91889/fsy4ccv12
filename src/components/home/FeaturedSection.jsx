import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FeaturedSection() {
  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Join Us in 2025
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
              Experience a transformative gathering of youth from across Florida & Georgia, 
              united in fellowship and faith. Together, we'll create memories that 
              last a lifetime while growing stronger in our walk with Christ.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-white text-lg font-semibold hover:text-gray-200 transition-colors"
            >
              Learn More
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
