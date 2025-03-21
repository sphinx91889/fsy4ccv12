import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-gray-400" />
              <a href="tel:3053309549" className="hover:text-gray-300">+1 888 982 5781</a>
            </div>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-gray-400 mt-1" />
              <address className="not-italic">
                305 North Dixie Highway<br />
                Hallandale Beach, FL 33009
              </address>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-400" />
              <a href="mailto:fsy4cc@gmail.com" className="hover:text-gray-300">fsy4cc@gmail.com</a>
            </div>
          </div>

          {/* Quick Links - Removed 2025 Conference */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/conference/registration" className="hover:text-gray-300">Registration</Link></li>
              <li><Link to="/conference/hotel" className="hover:text-gray-300">Hotel/Lodging</Link></li>
              <li><Link to="/conference/competitions" className="hover:text-gray-300">Competitions</Link></li>
              <li><Link to="/conference/schedule" className="hover:text-gray-300">Schedule</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Social & Website - Updated social links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.facebook.com/fsy4cc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/fsy4cc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <a 
              href="https://FSY4CC.org" 
              className="text-xl hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              FSY4CC.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Florida Statewide Youth for Christ Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
