import { motion } from 'framer-motion'

export default function WhatToExpect() {
  const features = [
    {
      title: "New Here?",
      subtitle: "You're welcome here.",
      description: "We understand showing up at a new conference for the first time can be nerve-wracking. Here's what you can expect at the National Youth Conference.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0686b28abddb9a79cb799.png"
    },
    {
      title: "Nurture Your Spiritual Growth",
      subtitle: "",
      description: "Our conference offers engaging ways for youth to learn about faith and develop biblical foundations for their lives.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c069f59276020364312b9a.jpeg"
    },
    {
      title: "Fun and Creative Activities",
      subtitle: "",
      description: "Youth will enjoy a variety of exciting activities, including competitions, games, and fellowship, designed to spark their imagination and encourage their hearts.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d17b715e098b7e60615f4d.png"
    },
    {
      title: "Safe and Supervised Environment",
      subtitle: "",
      description: "Participants will be in a safe and well-supervised environment where they can learn and fellowship with peace of mind.",
      image: "https://scontent-mia3-3.xx.fbcdn.net/v/t1.6435-9/66783147_2776948692318466_400870836996669440_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=mHIHN_IL-ncQ7kNvgETbySY&_nc_oc=Adj8sIJE8IQjWuUTkGud7uqhMPmD-3jsebj0y87gfknoY_xb7RNN3Y0djT2VzLzHWJa1u4OqAz64gSufuu29Ep6s&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=ABZNTzFvMhm5CS213DTwufg&oh=00_AYEGlW_57KVlIaBNlJnmaCBehDqmbQ-sDUQyRxXkKahMYw&oe=67F8E4C5"
    },
    {
      title: "Build Friendships",
      subtitle: "",
      description: "Youth will have the opportunity to make new friends and develop social skills in a safe Christian environment.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d17bcfa50ee1f68971ef01.jpeg"
    },
    {
      title: "Support for Parents",
      subtitle: "",
      description: "We offer guidance and support for parents throughout the conference, giving you peace of mind about your child's participation.",
      image: "https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67c0999b4777679b3110c48e.png"
    }
  ]

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHAT TO EXPECT
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-blue-600 font-semibold mb-2">
                    {feature.subtitle}
                  </p>
                )}
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
