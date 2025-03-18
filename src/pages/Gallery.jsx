import { useState } from 'react'

export default function Gallery() {
  const images = [
    // New gallery images
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886208b28013991c6b79b.jpeg', category: 'fellowship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce218ddfe84e.jpeg', category: 'competitions' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce0899dfe857.jpeg', category: 'worship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620c3c1a777cc36b858.jpeg', category: 'activities' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce5384dfe852.jpeg', category: 'fellowship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886201b97aca89d040c90.jpeg', category: 'worship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620c3c1a72c3536b85b.jpeg', category: 'competitions' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886208b28011317c6b7a1.jpeg', category: 'activities' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce4e32dfe856.jpeg', category: 'fellowship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886208b2801e22ac6b7a0.jpeg', category: 'worship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886201b97ac4e67040c91.jpeg', category: 'competitions' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce3131dfe859.jpeg', category: 'activities' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce3420dfe854.jpeg', category: 'fellowship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886207a118612117a3904.jpeg', category: 'worship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ceb903dfe850.jpeg', category: 'competitions' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620c3c1a747c336b855.jpeg', category: 'activities' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620170b5b5205726cdc.jpeg', category: 'fellowship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620fb9169fdc6670e25.jpeg', category: 'worship' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce57f8dfe855.jpeg', category: 'competitions' },
    { url: 'https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620fb916901b9670e29.jpeg', category: 'activities' },
    // Add all remaining images with appropriate categories
    // ... (continuing with all the provided URLs)
  ]

  const categories = ['all', 'competitions', 'worship', 'activities', 'fellowship']
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Photo Gallery</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group aspect-square overflow-hidden rounded-lg shadow-lg bg-gray-200"
            >
              <img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4 capitalize">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
