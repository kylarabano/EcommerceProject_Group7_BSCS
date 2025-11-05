function ProductCard({ product }) {
  try {
    return (
      <a href="product.html" className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow block" data-name="product-card" data-file="components/ProductCard.js">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          {product.sale && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              SALE
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            {product.originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[var(--primary-color)]">${product.price}</span>
                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
              </div>
            ) : (
              <span className="text-xl font-bold text-[var(--text-dark)]">${product.price}</span>
            )}
          </div>
        </div>
      </a>
    );
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}