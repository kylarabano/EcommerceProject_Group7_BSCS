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

function PrivacyApp() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Privacy Policy</h1>
          <p className="text-[var(--text-light)]">Last updated: November 3, 2025</p>
        </div>

        <div className="space-y-8 text-[var(--text-dark)]">
          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed text-[var(--text-light)] mb-3">
              Craft Carpets collects information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-light)]">
              <li>Create an account or make a purchase</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys, contests, or promotions</li>
              <li>Contact our customer support team</li>
              <li>Use our website or mobile applications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed text-[var(--text-light)] mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-light)]">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Improve our website, products, and services</li>
              <li>Detect and prevent fraud or other harmful activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              3. Information Sharing
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information with trusted service providers who assist us in operating our
              website, conducting our business, or serving our customers, as long as those parties
              agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              4. Data Security
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              Our website uses cookies and similar tracking technologies to enhance your browsing
              experience, analyze site traffic, and understand where our visitors are coming from.
              You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">6. Your Rights</h2>
            <p className="leading-relaxed text-[var(--text-light)] mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-light)]">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              7. Children's Privacy
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              Our Service is not intended for children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              8. Changes to This Policy
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">9. Contact Us</h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              If you have any questions about this Privacy Policy, please contact us at
              privacy@craftcarpets.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="signup.html" className="btn-primary text-center">
          Back to Sign Up
           </a>
          <a
            href="terms.html"
            className="px-6 py-3 bg-white text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-full font-medium hover:bg-[var(--bg-light)] transition-all duration-300 text-center"
          >
            View Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <PrivacyApp />
  </ErrorBoundary>
);