function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                <div className="icon-sofa text-xl text-white"></div>
              </div>
              <span className="text-xl font-bold text-[var(--text-dark)]">Craft Carpets</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="index.html" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">Home</a>
              <a href="shop.html" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">Shop</a>
              <a href="#deals" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">Deals</a>
              <a href="#brands" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">Brands</a>
              <a href="#contact" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <div className="icon-search text-xl text-[var(--text-dark)]"></div>
              </button>
              <a href="cart.html" className="p-2 hover:bg-gray-100 rounded-full">
                <div className="icon-shopping-cart text-xl text-[var(--text-dark)]"></div>
              </a>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <div className="icon-user text-xl text-[var(--text-dark)]"></div>
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="icon-menu text-xl text-[var(--text-dark)]"></div>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}