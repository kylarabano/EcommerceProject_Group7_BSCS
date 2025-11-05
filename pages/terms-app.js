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
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function TermsApp() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
            Terms of Service
          </h1>
          <p className="text-[var(--text-light)]">Last updated: November 3, 2025</p>
        </div>

        <div className="space-y-8 text-[var(--text-dark)]">
          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              By accessing and using Craft Carpets ("Service"), you accept and agree
              to be bound by the terms and provision of this agreement. If you do not
              agree to these Terms of Service, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              2. Use License
            </h2>
            <p className="leading-relaxed text-[var(--text-light)] mb-3">
              Permission is granted to temporarily access the materials on Craft
              Carpets for personal, non-commercial transitory viewing only. This is
              the grant of a license, not a transfer of title, and under this license
              you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-light)]">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on our Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              3. User Accounts
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              When you create an account with us, you must provide information that
              is accurate, complete, and current at all times. Failure to do so
              constitutes a breach of the Terms, which may result in immediate
              termination of your account on our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              4. Products and Services
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              Craft Carpets provides handcrafted carpet products and related
              services. We reserve the right to refuse service, terminate accounts,
              or cancel orders at our sole discretion. Product descriptions, pricing,
              and availability are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              5. Limitation of Liability
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              In no event shall Craft Carpets or its suppliers be liable for any
              damages arising out of the use or inability to use the materials on our
              Service, even if Craft Carpets or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              6. Governing Law
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              These terms and conditions are governed by and construed in accordance
              with applicable laws, and you irrevocably submit to the exclusive
              jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              7. Changes to Terms
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              We reserve the right to modify these Terms of Service at any time. We
              will notify users of any changes by updating the "Last updated" date at
              the top of this page. Your continued use of the Service after any such
              changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4">
              8. Contact Us
            </h2>
            <p className="leading-relaxed text-[var(--text-light)]">
              If you have any questions about these Terms of Service, please contact
              us at support@craftcarpets.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="signup.html" className="btn-primary text-center">
            Back to Sign Up
           </a>
          <a
            href="privacy.html"
            className="px-6 py-3 bg-white text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-full font-medium hover:bg-[var(--bg-light)] transition-all duration-300 text-center"
          >
            View Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <TermsApp />
  </ErrorBoundary>
);
