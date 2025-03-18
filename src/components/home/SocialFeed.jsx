import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function SocialFeed() {
  const images = [
    { src: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/66415077_2776976515649017_689063928537284608_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=nsOrZpmd8PgQ7kNvgEAi-0u&_nc_oc=AdjdLrDzzXeDmEFqooPNoq4z8dNk6N84Ha3huIzERvvK6aJ76L7EwkUjb2bZ7uFaOcczgfiWJFv4FCJ_wGr-CYSz&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AE7pnjj0GiMArASRSTAeft1&oh=00_AYEF3tE4s4EJhvrT9XqCa6Qet-WL64Ezo7jm6swRe1t9Aw&oe=67F8FE1E", size: "small" },
    { src: "https://scontent-mia3-3.xx.fbcdn.net/v/t1.6435-9/66510419_2776981242315211_7843252560495378432_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=-IfcvbOrFHEQ7kNvgGCZmh9&_nc_oc=Adj_I6NuqewccXuA3wYV9D087hHSwUWoF2ElCd7JZq_ZNmaFSHpfrVH92Ra391-6otqC1vnhuR3j55fWAcf2yMHT&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=AjF2gG7n2gBUpc14z3wfnW2&oh=00_AYG_WkwqsTG7_24UhRDfcEyUw2JWEk3XeL5Ws2RP8Wjeog&oe=67F8D6C2", size: "small" },
    { src: "https://scontent-mia3-3.xx.fbcdn.net/v/t1.6435-9/66848167_2776979848982017_3655641038665547776_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=lcQeGf4xfCwQ7kNvgG0a32D&_nc_oc=AdikHKJykVu2uX7HlPQsuaFEm1Hi1JrJmhOQ1adSgAliqyrcREVJmyd-oWuAcKMWQprZVUWrYQqv_TSXPyHaT1iL&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=A2p7TTgmOaxNdX6eNycvnc3&oh=00_AYF-dUfhUyB4-AEeKIKF0G8yfI1g774Li_gAqDN1B1ULkg&oe=67F8F2BE", size: "large" },
    { src: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/67112358_2776981615648507_6728479290419052544_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=5VA1x8YB_0EQ7kNvgGpxqdw&_nc_oc=Adi7riQa2mrct_IqA1kxT6oresAq8t6w7rZOBTv_QE-2URHwTteA392SLlyGW9BILwerRB_pW3317GchERbrvHR9&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=Au1oQxcXPuP0D_5L_iTsszU&oh=00_AYFu0aRaK28JmEtTH_aqcjoB2-9DQ1_L4Vw-DK-NYkc0xg&oe=67F8DB6E", size: "small" },
    { src: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/67295127_2776944348985567_3133690550994075648_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Wnwk4ADvyWQQ7kNvgFQLl3B&_nc_oc=AdiVagtVyyEpmY10mABccTRmsfLqx40Vh9omc6HwbITqsjId5fkWr745n-ShdSqwgOideMkvUsRV8r4_PUKcCgo9&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AXUXO-q_39kKPxZ-b_AASFX&oh=00_AYGWWZFO6vHkJDDoLMyBflO4Hmf8BXSGM1DmWfi1Iyhn1w&oe=67F8FBB9", size: "small" },
  ];

  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 w-full">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Follow the Action!
          </motion.h2>
          <div className="text-2xl font-bold text-gray-700 mb-4">@fsy4cc</div>
          <div className="flex gap-4 justify-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-600 hover:text-pink-700 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/fsy4cc/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-700 transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
