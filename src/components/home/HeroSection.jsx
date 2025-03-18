import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.div 
      className="relative min-h-screen py-[50px] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Video - Updated source */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://videos.pexels.com/video-files/9665451/9665451-hd_1920_1080_25fps.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Main image */}
      <div 
        className="relative w-full h-full bg-contain bg-center bg-no-repeat mx-auto z-10"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d8abdb628c2f3335a14fe2.png')`,
          maxWidth: 'calc(100% - 100px)',
          height: 'calc(100vh - 100px)'
        }}
      />
    </motion.div>
  )
}
