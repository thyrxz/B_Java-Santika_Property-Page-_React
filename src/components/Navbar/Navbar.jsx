import { useId } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 justify-between px-24 py-4 bg-[#ffffff] items-center shadow-xl">
      {/* Logo Section */}
      <ul>
        <li className="flex items-center justify-center">
          <Link to="/" className="hover:opacity-80 active:opacity-60">
            <img
              src="assets/img/logo.jpg" // Ganti dengan path gambar logo Anda
              alt="Logo"
              className="h-10 w-auto" // Anda dapat mengatur ukuran logo di sini
            />
          </Link>
        </li>
      </ul>

      {/* Search Input Section */}
      <ul className="flex justify-center items-center">
        <li className="w-full">
          <input
            type="text"
            className="text-black px-4 py-2 w-full border-2 border-[#739646] rounded-md focus:outline-none focus:ring-2 focus:ring-[#739646]"
            name="search"
            id={inputId}
            placeholder="Search product..."
            onChange={handleSearchInput}
          />
        </li>
      </ul>

      {/* User Authentication Section */}
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#F2F4FF] hover:text-[#739646] active:text-[#739646]">
            <Link
              to="/Login"
              className="inline-flex items-center justify-center pt-1 pb-1 pl-5 pr-5 border-2 bg-[#739646] border-[#5f7f33] text-[#ffffff] hover:text-[#739646] hover:bg-[#ffffff] hover:border-[#5f7f33] active:bg-[#5f7f33] active:border-[#5f7f33] rounded-[40px] transition-all"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/SignUp"
              className="inline-flex items-center justify-center pt-1 pb-1 pl-5 pr-5 border-2 bg-[#739646] border-[#5f7f33] text-[#ffffff] hover:text-[#739646] hover:bg-[#ffffff] hover:border-[#5f7f33] active:bg-[#5f7f33] active:border-[#5f7f33] rounded-[40px] transition-all"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        // Tampilan jika pengguna sudah login (ini bisa ditambahkan jika Anda ingin menampilkan link "Sign out", "Cart", dll.)
        <ul className="flex gap-2 justify-end">
          <li className="text-[#F2F4FF] hover:text-[#739646] active:text-[#739646]">
            <Link
              to="/cart"
              className="inline-flex items-center justify-center pt-1 pb-1 pl-5 pr-5 border-2 bg-[#739646] border-[#5f7f33] text-[#ffffff] hover:text-[#739646] hover:bg-[#ffffff] hover:border-[#5f7f33] active:bg-[#5f7f33] active:border-[#5f7f33] rounded-[40px] transition-all"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="inline-flex items-center justify-center pt-1 pb-1 pl-5 pr-5 border-2 bg-[#739646] border-[#5f7f33] text-[#ffffff] hover:text-[#739646] hover:bg-[#ffffff] hover:border-[#5f7f33] active:bg-[#5f7f33] active:border-[#5f7f33] rounded-[40px] transition-all"
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              to="/SignOut"
              className="inline-flex items-center justify-center pt-1 pb-1 pl-5 pr-5 border-2 bg-[#739646] border-[#5f7f33] text-[#ffffff] hover:text-[#739646] hover:bg-[#ffffff] hover:border-[#5f7f33] active:bg-[#5f7f33] active:border-[#5f7f33] rounded-[40px] transition-all"
            >
              Sign Out
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
