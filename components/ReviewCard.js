function ReviewCard({ review }) {
  try {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm" data-name="review-card" data-file="components/ReviewCard.js">
        <div className="flex items-center mb-4">
          <img 
            src={review.avatar} 
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-[var(--text-dark)]">{review.name}</h4>
            <div className="flex text-[var(--accent-color)]">
              {[...Array(review.rating)].map((_, i) => (
                <div key={i} className="icon-star text-sm"></div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[var(--text-light)] text-sm leading-relaxed">{review.text}</p>
      </div>
    );
  } catch (error) {
    console.error('ReviewCard component error:', error);
    return null;
  }
}