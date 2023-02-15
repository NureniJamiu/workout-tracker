import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  console.log(user);

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="flex px-8 py-6 items-center justify-between lg:px-20">
      <Link to="/">
        <h1 className="font-bold text-blue-600 text-2xl ">
          workout
          <span className="font-normal text-black uppercase">tracker</span>
        </h1>
      </Link>
      <nav>
        {user && (
          <div className="flex gap-5 items-center">
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              className="border-2 border-blue-500 text-blue-500 py-1 px-2 rounded"
            >
              Logout
            </button>
          </div>
        )}
        {!user && (
          <div className="flex gap-5 items-center justify-between">
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/signup"
              className=" bg-blue-500 transition ease-in-out duration-200 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            >
              Signup
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
