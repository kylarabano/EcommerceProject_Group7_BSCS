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
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function SignupApp() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignupForm />
    </div>
  );
}

function SignupForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  setError('');

  const form = e.target;

  // ✅ Use browser native validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // ✅ Custom password match check using native popup
  if (password !== confirmPassword) {
    const confirmInput = document.getElementById('confirmPassword');
    confirmInput.setCustomValidity('Passwords do not match.');
    confirmInput.reportValidity(); // 🔥 shows native popup beside field
    return;
  } else {
    document.getElementById('confirmPassword').setCustomValidity('');
  }

  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    window.location.href = 'login.html';
  }, 1500);
};
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">Craft Carpets</h1>
        <p className="text-[var(--text-light)]">Create your account below.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <div className="icon-alert-circle text-xl text-red-600 mt-0.5"></div>
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <div className="icon-mail text-xl text-[var(--text-light)]"></div>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <div className="icon-lock text-xl text-[var(--text-light)]"></div>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <div className="icon-lock text-xl text-[var(--text-light)]"></div>
            </div>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="animate-spin icon-loader text-xl"></div>
              <span>Creating account...</span>
            </>
          ) : (
            <span>Sign Up</span>
          )}
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-[var(--text-light)]">
          Already have an account?{' '}
          <a
            href="login.html"
            className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium transition-colors"
          >
            Sign in
          </a>
        </p>
      </div>

      {/* Footer */}
<div className="mt-8 pt-6 border-t border-gray-200">
  <p className="text-center text-xs text-[var(--text-light)]">
    By signing up, you agree to our{' '}
    <a
      href="terms.html"
      className="text-[var(--primary-color)] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Terms of Service
    </a>{' '}
    and{' '}
    <a
      href="privacy.html"
      className="text-[var(--primary-color)] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Privacy Policy
    </a>.
  </p>
</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <SignupApp />
  </ErrorBoundary>
);