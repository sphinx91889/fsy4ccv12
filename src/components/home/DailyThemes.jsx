import { motion } from 'framer-motion'

export default function DailyThemes() {
  const days = [
    {
      day: "WEDNESDAY",
      date: "June 25",
      theme: "Opening Day",
      activities: "Registration and Meet & Greet",
      verse: "In the beginning God created the heavens and the earth. - Genesis 1:1",
      dress: "Casual Attire"
    },
    {
      day: "THURSDAY",
      date: "June 26",
      theme: "Competition & Fellowship Day",
      activities: "Devotion, Seminars: Boys 2 Men & Girls’ Talk, Education Forum, Bible Competitions on the Book of Genesis",
      verse: "I will make you into a great nation, and I will bless you. - Genesis 12:2",
      dress: "Casual Attire"
    },
    {
      day: "FRIDAY",
      date: "June 27",
      theme: "Competition & Fellowship Day",
      activities: "Devotion, Breakouts, Bible Competitions on the Book of Genesis & FSY4CC Adams Banquet",
      verse: "I am with you and will watch over you wherever you go. - Genesis 28:15",
      dress: "Casual Attire - Banquet: Church Attire"
    },
    {
      day: "SATURDAY",
      date: "June 28",
      theme: "Fellowship & Farewell",
      activities: "Saturday Fun in the Son & Closing Ceremony",
      verse: "But as for you, you meant evil against me; but God meant it for good. - Genesis 50:20",
      dress: "Conference T-Shirt + Athletic Shoes (Soft-bottom)"
    }
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://videos.pexels.com/video-files/4186948/4186948-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            DAILY CONFERENCE SCHEDULE
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {days.map((day) => (
              <motion.div
                key={day.day}
                className="bg-gray-50/90 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900">{day.day}</h3>
                <p className="text-lg text-blue-600 mb-3">{day.date}</p>
                <h4 className="font-semibold text-gray-800 mb-2">{day.theme}</h4>
                <p className="text-gray-600 mb-4">{day.activities}</p>
                <div className="border-t pt-4">
                  <p className="text-sm italic text-gray-500">{day.verse}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">Dress Code:</span> {day.dress}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
