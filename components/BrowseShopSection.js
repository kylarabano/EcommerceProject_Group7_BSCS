function BrowseShopSection() {
  try {
    return (
      <section className="py-16 bg-white" data-name="browse-shop" data-file="components/BrowseShopSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80" 
              alt="Browse Shop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-5xl font-bold mb-4">Browse &</h2>
                <h2 className="text-5xl font-bold mb-8">Shop</h2>
                <a href="shop.html" className="btn-primary inline-block">
                  View All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BrowseShopSection component error:', error);
    return null;
  }
}