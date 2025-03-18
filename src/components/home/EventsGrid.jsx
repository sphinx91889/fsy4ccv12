import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function EventsGrid() {
  const events = [
    {
      title: 'BIBLE BOWL',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0686b28abddb9a79cb799.png',
      path: '/conference/competitions/bible-bowl'
    },
    {
      title: 'COUNT THE WORD',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c06a3f9276027109312bb9.jpeg',
      path: '/conference/competitions/count-word'
    },
    {
      title: 'SPEAK A WORD',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c069f59276020364312b9a.jpeg',
      path: '/conference/competitions/speak-word'
    },
    {
      title: 'SPELLING BEE',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c06a9c1b9e0f4d7caede48.jpeg',
      path: '/conference/competitions/spelling-bee'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -60, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="bg-gray-100 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 h-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {events.map((event) => (
            <motion.div
              key={event.title}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-[300px] w-full"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 opacity-50 group-hover:opacity-60 transition-opacity duration-300"
                style={{ 
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/30 z-1" />
              
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <h3 className="text-3xl font-bold text-gray-900">{event.title}</h3>
                <Link
                  to={event.path}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                >
                  <span>Learn More</span>
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
