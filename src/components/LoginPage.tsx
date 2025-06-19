import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, LogIn } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { login as loginAction, setLoading } from '../features/auth/authSlice';
import { User } from '../types';

// Mock users data (move to a shared location if needed)
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Waferwire Admin',
    email: 'admin@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    department: 'IT',
    joinedDate: '2023-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Waferwire User',
    email: 'user@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    department: 'Marketing',
    joinedDate: '2023-03-20',
    status: 'active'
  }
];

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  if (user) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    dispatch(setLoading(true));
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password') {
      dispatch(loginAction(foundUser));
      localStorage.setItem('user', JSON.stringify(foundUser));
    } else {
      setError('Invalid credentials. Please try again.');
      dispatch(setLoading(false));
    }
  };

  const fillDemoCredentials = (role: 'admin' | 'user') => {
    if (role === 'admin') {
      setEmail('admin@example.com');
    } else {
      setEmail('user@example.com');
    }
    setPassword('password');
  };

  return (
    <div className="min-vh-100 gradient-bg-light d-flex align-items-center justify-content-center p-4">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center gradient-bg rounded-circle" style={{width: '64px', height: '64px'}}>
                <Lock className="text-white" size={32} />
              </div>
              <h2 className="fw-bold text-dark mb-2">Welcome Back</h2>
              <p className="text-muted">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-medium">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <Mail size={20} className="text-muted" />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control border-start-0 ps-0"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-medium">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <Lock size={20} className="text-muted" />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control border-start-0 border-end-0 ps-0"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary border-start-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-gradient w-100 py-2 mb-4"
              >
                {isLoading ? (
                  <div className="spinner-border spinner-border-sm me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <LogIn size={20} className="me-2" />
                )}
                Sign In
              </button>
            </form>

            <div className="text-center">
              <hr className="my-4" />
              <p className="text-muted mb-3">Demo Accounts</p>
              <div className="row g-2">
                <div className="col-6">
                  <button
                    type="button"
                    onClick={() => fillDemoCredentials('admin')}
                    className="btn btn-outline-secondary w-100"
                  >
                    Admin Demo
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    onClick={() => fillDemoCredentials('user')}
                    className="btn btn-outline-secondary w-100"
                  >
                    User Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;