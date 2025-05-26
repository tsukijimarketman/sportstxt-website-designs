
import { useState } from 'react';

interface AuthDialogProps {
  show: boolean;
  onHide: () => void;
}

const AuthDialog = ({ show, onHide }: AuthDialogProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth logic would go here
    console.log('Auth submitted:', formData);
    onHide();
  };

  if (!show) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        zIndex: 1060,
        backdropFilter: 'blur(5px)'
      }}
      onClick={onHide}
    >
      <div 
        className="bg-white rounded-4 p-5 shadow-lg animate-fade-in"
        style={{ 
          width: '90%', 
          maxWidth: '450px',
          animation: 'fade-in 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-4">
          <img
            src="/assets/1e15a1f3-d614-46fd-8195-0cfaa80cc887.png"
            alt="SportsTXT"
            height="50"
            className="mb-3"
          />
          <h3 className="fw-bold text-dark mb-2">
            {isLogin ? 'Welcome Back!' : 'Join SportsTXT'}
          </h3>
          <p className="text-muted">
            {isLogin 
              ? 'Sign in to access your sports community' 
              : 'Create your account and start building your community'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-medium">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required={!isLogin}
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">Email Address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label fw-medium">Confirm Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Confirm your password"
                required={!isLogin}
              />
            </div>
          )}

          <button
            type="submit"
            className="btn btn-sports-red btn-lg w-100 fw-semibold mb-3 scale-hover"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className="text-center">
            <span className="text-muted">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              type="button"
              className="btn btn-link p-0 text-sports-blue fw-semibold text-decoration-none"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </form>

        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onHide}
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default AuthDialog;
