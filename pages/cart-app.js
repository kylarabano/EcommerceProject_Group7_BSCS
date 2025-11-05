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

function CartApp() {
  try {
    const [cartItems, setCartItems] = React.useState([
      {
        id: 1,
        name: 'Channeled Accent Chair',
        price: 772.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&q=80'
      },
      {
        id: 2,
        name: 'Trois-Rivieres Coffee Table',
        price: 939.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=200&q=80'
      },
      {
        id: 3,
        name: 'Leather Sectional Sofa',
        price: 2499.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80'
      }
    ]);

    return (
      <div className="min-h-screen bg-white" data-name="cart-app" data-file="cart-app.js">
        <Header />
        <CartContent cartItems={cartItems} setCartItems={setCartItems} />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('CartApp component error:', error);
    return null;
  }
}

function CartContent({ cartItems, setCartItems }) {
  try {
    const updateQuantity = (id, newQuantity) => {
      if (newQuantity < 1) return;
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    const removeItem = (id) => {
      setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
      <main className="py-12" data-name="cart-content" data-file="cart-app.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--text-dark)] mb-2">Cart</h1>
          <p className="text-[var(--text-light)] mb-8">{cartItems.length} item(s)</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-6 py-6 border-b border-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-1">{item.name}</h3>
                    <p className="text-xl font-bold text-[var(--text-dark)]">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100 rounded-l-full"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100 rounded-r-full"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xl font-bold text-[var(--text-dark)] w-24 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <div className="icon-x text-xl text-gray-400"></div>
                  </button>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[var(--text-light)]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="btn-primary w-full text-lg py-4">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('CartContent component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <CartApp />
  </ErrorBoundary>
);
