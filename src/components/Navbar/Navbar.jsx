import { useId } from 'react';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="grid grid-cols-3 justify-between px-24 py-4 bg-[#001f3f] items-center">
      <ul>
        <li className="flex items-center justify-center">
          <Link to="/" className="text-[#E0E8F9] hover:text-[#99B3D6] active:text-[#657C9E]">
            Home
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="w-full">
          <input
            type="text"
            className="text-black active:text-black focus:text-black px-4 py-2 w-full"
            name="search"
            id={inputId}
            placeholder="Search product..."
            onChange={handleSearchInput}
          />
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#E0E8F9] hover:text-[#99B3D6] active:text-[#657C9E]">
            <button onClick={login}>Sign in</button>
          </li>
          <li>
            <Link className="text-[#E0E8F9] hover:text-[#99B3D6] active:text-[#657C9E]" to="/signup">
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-2">
          <li>
            <Link className="text-[#E0E8F9] hover:text-[#99B3D6] active:text-[#657C9E]" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/orders" className="text-[#E0E8F9] hover:text-[#99B3D6] active:text-[#657C9E]">
              My Orders
            </Link>
          </li>
          <li>
            <button onClick={logout} className="text-[#E0E8F9] hover:text-[#99B3D6] active:text-[#657C9E]">
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
