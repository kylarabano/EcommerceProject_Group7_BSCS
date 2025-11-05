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

function LoginApp() {
  try {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4" // ✅ removed background color
        data-name="login-app"
        data-file="login-app.js"
      >
        <LoginForm />
      </div>
    );
  } catch (error) {
    console.error('LoginApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <LoginApp />
  </ErrorBoundary>
);




function LoginForm() {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      // ✅ Let browser handle validation
      const form = e.target;
      if (!form.checkValidity()) {
        form.reportValidity(); // shows native popup beside invalid field
        return;
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = 'index.html';
      }, 1500);
    };

    return (
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
        data-name="login-form"
        data-file="components/LoginForm.js"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">
  Craft Carpets
</h1>
          <p className="text-[var(--text-light)]">
            Welcome back! Please sign in your account.
          </p>
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
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
                required // ✅ triggers native validation
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
         <div>
  <label
    htmlFor="password"
    className="block text-sm font-medium text-[var(--text-dark)] mb-2"
  >
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

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)]"
              />
              <span className="ml-2 text-sm text-[var(--text-dark)]">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin icon-loader text-xl"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[var(--text-light)]">
            Don't have an account?{' '}
           <a
           href="signup.html"
           className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium transition-colors"
            >
            Sign up
            </a>
          </p>
        </div>

        
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}