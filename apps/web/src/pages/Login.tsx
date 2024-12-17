import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { AuthButton } from '../components/auth/AuthButton';
import { AuthInput } from '../components/auth/AuthInput';
import showToast from '../components/toast/Toast';
import { APISERVICE, setDataInLocal } from '../service/API';

interface FromDataType {
  email : string,
  password : string
}

export const Login = () => {
  const [formData, setFormData] = useState<FromDataType>({
    email : "",
    password : ""
  });
  const navigate = useNavigate();

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFormData((prev)=>({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }
  
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
      const responce = await APISERVICE.post("api/login", formData);
      console.log({responce});
      if(responce.data.success){
        showToast(responce.data.message, "success");
        setDataInLocal("user", responce.data.data);
        setDataInLocal("token",responce.data.token);
        navigate("/chat");
        return;
      }
      showToast(responce.data.message, "error");
    }catch(err){
      console.log(err);
      showToast((err as Error).message , "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-400">Sign in to continue to Asky.AI</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 shadow-xl space-y-6 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <AuthInput
              value={formData.email}
              id="email"
              label="Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
            
            <AuthInput
              value={formData.password}
              name="password"
              id="password"
              label="Password"
              type="password"
              onChange={handleChange}
              required
            />

            <div className="pt-2">
              <AuthButton type="submit" variant="primary" fullWidth>
                Sign In
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
            <span>Sign in with Google</span>
          </AuthButton>

          <p className="text-center text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-500 hover:text-purple-400 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};