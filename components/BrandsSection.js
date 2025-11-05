function BrandsSection() {
  try {
    const brands = [
      { name: 'Luxury', logo: 'https://via.placeholder.com/120x60/f5f5f5/666?text=Luxury' },
      { name: 'Modern', logo: 'https://via.placeholder.com/120x60/f5f5f5/666?text=Modern' },
      { name: 'Churchill', logo: 'https://via.placeholder.com/120x60/f5f5f5/666?text=Churchill' },
      { name: 'Renovation', logo: 'https://via.placeholder.com/120x60/f5f5f5/666?text=Renovation' },
      { name: 'Classic', logo: 'https://via.placeholder.com/120x60/f5f5f5/666?text=Classic' },
      { name: 'Elite', logo: 'https://via.placeholder.com/120x60/f5f5f5/666?text=Elite' },
      { name: 'Artisan', logo: 'https://via.placeholder.com/120x60/f5f5f5/666?text=Artisan' }
    ];

    return (
      <section className="py-16 bg-gray-50" data-name="brands-section" data-file="components/BrandsSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--text-dark)]">BRANDS</h2>
            <button className="btn-outline">
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BrandsSection component error:', error);
    return null;
  }
}