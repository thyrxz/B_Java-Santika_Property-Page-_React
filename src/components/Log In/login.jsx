import { useState } from 'react';
import { useUser } from '../../context/UserContext'; // Import UserContext to access login function
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Login() {
  const { login } = useUser(); // Access login function from UserContext
  const navigate = useNavigate(); // Hook to navigate after login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic here (e.g., API call)
    if (email && password) {
      login(email, password);
      navigate('/'); // Redirect to home after successful login
    } else {
      setError('Please provide both email and password.');
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-screen bg-[#F5F5F5]">
        <div className="bg-white p-8 rounded-[40px] shadow-xl w-96">
          <h2 className="text-2xl font-semibold text-center text-[#739646] mb-6">
            <b>Sign In</b>
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#739646] ">
                <b>Email</b>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#739646] border-[#5f7f33]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-[#739646] ">
                <b>Password</b>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#739646] border-[#5f7f33]"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full max-w-[400px] px-6 py-1 bg-[#739646] border-2 border-[#5f7f33] text-[#ffffff] hover:text-[#739646] hover:bg-[#ffffff] hover:border-[#5f7f33] active:bg-[#5f7f33] active:border-[#5f7f33] rounded-full transition-all"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-[#739646]">
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="text-[#739646] hover:text-[#739646]">
                <b>Sign up</b>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
