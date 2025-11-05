function ProductShowcase() {
  try {
    return (
      <section className="py-16 bg-gray-50" data-name="product-showcase" data-file="components/ProductShowcase.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80" 
                alt="Autumn Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Discover featured products</h3>
                <p className="text-lg mb-4">TRENDS SPOTLIGHTS</p>
                <button className="btn-outline bg-white bg-opacity-20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[var(--text-dark)]">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80" 
                alt="Cozy Setup"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Save big by shopping in</h3>
                <button className="btn-outline bg-white bg-opacity-20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[var(--text-dark)]">
                  Shop Collection
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=80" 
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductShowcase component error:', error);
    return null;
  }
}