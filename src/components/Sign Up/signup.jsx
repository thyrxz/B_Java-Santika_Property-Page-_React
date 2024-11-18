import { useState } from 'react';
import { useUser } from '../../context/UserContext'; // Import UserContext for signup functionality
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const SignUp = ({ onSignUpSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useUser(); // Get the signUp function from context
  const navigate = useNavigate(); // Hook to navigate after signup
  const [error, setError] = useState(''); // To show errors if any

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await signUp(email, password); // Perform signup
      if (onSignUpSuccess) onSignUpSuccess(); // Callback for successful signup
      navigate('/'); // Redirect to home after successful signup
    } catch (error) {
      console.error('Sign Up failed', error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-screen bg-[#F5F5F5] ">
        <div className="bg-white p-8 rounded-[40px] shadow-xl w-96">
          <h2 className="text-2xl font-semibold text-center text-[#739646] mb-6">
            <b>Sign Up</b>
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#739646]">
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
              <label htmlFor="password" className="block text-[#739646]">
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
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block text-[#739646]">
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#739646] border-[#5f7f33]"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full max-w-[400px] px-6 py-1 bg-[#739646] border-2 border-[#5f7f33] text-[#ffffff] hover:text-[#739646] hover:bg-[#ffffff] hover:border-[#5f7f33] active:bg-[#5f7f33] active:border-[#5f7f33] rounded-full transition-all"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-[#739646]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#739646] hover:text-[#739646]">
                <b>Log in</b>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

SignUp.propTypes = {
  onSignUpSuccess: PropTypes.func, // Optional callback function on successful signup
};

export default SignUp;
