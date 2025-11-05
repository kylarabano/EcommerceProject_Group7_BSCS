function FeaturesSection() {
  try {
    const features = [
      {
        icon: 'truck',
        title: 'Free Delivery',
        description: 'Enjoy free shipping on orders over $50 with next-day delivery'
      },
      {
        icon: 'refresh-cw',
        title: 'Easy Returns',
        description: 'Hassle-free returns within 30 days of purchase'
      },
      {
        icon: 'shield-check',
        title: 'Secure Payment',
        description: 'Your payment information is always safe and secure'
      }
    ];

    return (
      <section className="py-16 bg-white" data-name="features-section" data-file="components/FeaturesSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 hover:shadow-lg rounded-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--bg-light)] rounded-full flex items-center justify-center">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">{feature.title}</h3>
                <p className="text-[var(--text-light)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FeaturesSection component error:', error);
    return null;
  }
}