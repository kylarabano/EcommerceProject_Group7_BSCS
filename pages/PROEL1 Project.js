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

function ProductApp() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="product-app" data-file="product-app.js">
        <Header />
        <ProductDetail />
        <RelatedProducts />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ProductApp component error:', error);
    return null;
  }
}

function ProductDetail() {
  try {
    const [quantity, setQuantity] = React.useState(1);
    const [selectedImage, setSelectedImage] = React.useState(0);

    const product = {
      name: 'Channeled Accent Chair',
      price: 772.00,
      description: 'A stunning channeled accent chair that combines comfort with contemporary style. Perfect for any modern living space.',
      images: [
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
      ],
      features: [
        'High-quality upholstery',
        'Sturdy wooden frame',
        'Easy to clean',
        'Modern channeled design'
      ]
    };

    const handleAddToCart = () => {
      alert(`Added ${quantity} item(s) to cart!`);
    };

    return (
      <section className="py-12" data-name="product-detail" data-file="product-app.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-[var(--primary-color)]' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-[var(--text-dark)] mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-[var(--primary-color)] mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-[var(--text-light)] mb-6 leading-relaxed">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-[var(--text-light)]">
                      <div className="icon-check text-lg text-green-600 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-full">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 rounded-l-full"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 rounded-r-full"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
              >
                <div className="icon-shopping-cart text-xl"></div>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductDetail component error:', error);
    return null;
  }
}

function RelatedProducts() {
  try {
    const products = [
      { name: 'Cambridge Armchair', price: 1199, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80' },
      { name: 'Modern Sofa', price: 2399, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
      { name: 'Pendant Light', price: 499, image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47a917?w=400&q=80' },
      { name: 'Coffee Table', price: 599, image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400&q=80' }
    ];

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-xl font-bold text-[var(--primary-color)]">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('RelatedProducts component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ProductApp />
  </ErrorBoundary>
);
