function HeroSection() {
  try {
    return (
      <section className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80)'}} data-name="hero-section" data-file="components/HeroSection.js">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <p className="text-white text-lg mb-4 font-medium">November Special</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">DEALS</h1>
          <p className="text-white text-xl mb-8">Exclusive Limited-Time Offers</p>
          <a href="shop.html" className="btn-primary text-lg inline-block">
            Shop Now
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}