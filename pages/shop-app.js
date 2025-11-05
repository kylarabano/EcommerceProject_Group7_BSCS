class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ShopApp() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="shop-app" data-file="shop-app.js">
        <Header />
        <ShopContent />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ShopApp component error:', error);
    return null;
  }
}

function BrowseShopBanner() {
  try {
    return (
      <section className="relative h-64 mb-12">
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80" 
          alt="Browse Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Browse &</h1>
            <h1 className="text-5xl font-bold">Shop</h1>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BrowseShopBanner component error:', error);
    return null;
  }
}

function BrandsShowcase() {
  try {
    const brands = ['Luxury', 'Modern Design', 'Churchill', 'Renovation', 'Classic', 'Young', 'Joybird'];
    return (
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-4">BRANDS</h2>
          <button className="btn-outline">See All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {brands.map((brand, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-20">
              <span className="text-gray-600 font-medium text-sm">{brand}</span>
            </div>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('BrandsShowcase component error:', error);
    return null;
  }
}

function ShopContent() {
  try {
    return (
      <main className="py-12">
        <BrowseShopBanner />
        <BrandsShowcase />
        <NewArrivals />
        <OnSale />
        <Reviews />
      </main>
    );
  } catch (error) {
    console.error('ShopContent component error:', error);
    return null;
  }
}

function NewArrivals() {
  try {
    const products = [
      { name: 'Leather Sectional Sofa', price: 2899, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', sale: true },
      { name: 'Cambridge Armchair Chair', price: 1199, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80', sale: true },
      { name: 'Chelsea Storage Sideboard', price: 1599, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80', sale: false },
      { name: 'Pendant Chandelier', price: 499, image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47a917?w=400&q=80', sale: true },
      { name: 'Kimberly Bamboo Basket', price: 89, image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&q=80', sale: true }
    ];

    return (
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--text-dark)]">NEW ARRIVALS</h2>
          <button className="btn-outline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('NewArrivals component error:', error);
    return null;
  }
}

function OnSale() {
  try {
    const products = [
      { name: 'Revolve Coffee Table', price: 599, originalPrice: 899, image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400&q=80', sale: true },
      { name: 'Carriage Square Arm Sofa', price: 1899, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80', sale: true },
      { name: 'Ariel French Wood Bench', price: 399, originalPrice: 599, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80', sale: true },
      { name: 'Black Nightstand', price: 299, originalPrice: 499, image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&q=80', sale: true },
      { name: 'Maple Sectional Sofa', price: 2399, originalPrice: 3199, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80', sale: true }
    ];

    return (
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--primary-color)]">ON SALE</h2>
          <button className="btn-outline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('OnSale component error:', error);
    return null;
  }
}

function Reviews() {
  try {
    const reviews = [
      { name: 'Sofia Ali Ahmad', avatar: 'https://i.pravatar.cc/150?img=1', rating: 5, text: '"The absolutely thrilled with my purchase! The quality is outstanding and the delivery was super fast. Highly recommend this store to anyone looking for premium furniture."' },
      { name: 'Samantha Jones', avatar: 'https://i.pravatar.cc/150?img=5', rating: 5, text: '"I was initially hesitant to buy furniture online, but this experience exceeded all my expectations. The customer service team was incredibly helpful throughout."' },
      { name: 'Maria Sandra', avatar: 'https://i.pravatar.cc/150?img=9', rating: 5, text: '"I love it more than I can\'t describe! Such a beautiful piece that perfectly complements my living room. The attention to detail and craftsmanship is truly remarkable."' }
    ];

    return (
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--text-dark)]">REVIEWS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Reviews component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ShopApp />
  </ErrorBoundary>
);
