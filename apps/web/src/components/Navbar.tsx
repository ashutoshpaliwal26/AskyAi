import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, X } from 'lucide-react';
import { getDataFromLocal } from '../service/API';

export const Navbar = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const authSuccess = getDataFromLocal("success");

    if (authSuccess) {
      setIsAuth(authSuccess);
    }
  }, [isAuth]);
  return (
    <nav className="fixed w-full text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Asky.AI</Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/about" className="hover:text-purple-400">About</Link>
          <Link to="/pricing" className="hover:text-purple-400">Blogs</Link>
        </div>

        <div className="md:flex space-x-4">
          {
            isAuth ? <>{isOpen && (
              <div className="absolute w-40  top-16 md:right-16 bg-gray-700 p-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="text-purple-400">Home</Link>
                  <Link to="/about" className="text-purple-400">About</Link>
                  <Link to="/pricing" className="text-purple-400">Blogs</Link>
                  <Link to="/login" className="text-purple-400">Login</Link>
                  <Link to="/signup" className="text-purple-400">Sign Up</Link>
                </div>
              </div>
            )}
              <div className='bg-gray-700' style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }} onClick={() => setIsOpen(!isOpen)}><User /></div>
            </> : (<>
              <Link to="/login" className="px-4 py-2 rounded border border-purple-500 hover:bg-purple-500">
                Login
              </Link>
            </>
            )
          }

        </div>
      </div>
    </nav>
  );
};