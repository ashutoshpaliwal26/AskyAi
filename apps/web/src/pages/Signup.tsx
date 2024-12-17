import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { AuthButton } from '../components/auth/AuthButton';
import { AuthInput } from '../components/auth/AuthInput';

export const Signup = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="mt-2 text-gray-400">Join Asky.AI today</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 shadow-xl space-y-6 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <AuthInput
              id="name"
              label="Full Name"
              type="text"
              name='name'
              required
            />

            <AuthInput
              id="email"
              name='email'
              label="Email"
              type="email"
              required
            />
            
            <AuthInput
              id="password"
              name='password'
              label="Password"
              type="password"
              required
            />

            <div className="pt-2">
              <AuthButton type="submit" variant="primary" fullWidth>
                Create Account
              </AuthButton>
            </div>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
            </div>
          </div>

          <AuthButton variant="secondary" fullWidth>
            <GoogleIcon />
            <span>Sign up with Google</span>
          </AuthButton>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-500 hover:text-purple-400 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};