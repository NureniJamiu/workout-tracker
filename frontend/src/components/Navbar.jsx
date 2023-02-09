import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="py-6 px-8 font-bold text-blue-600 text-2xl lg:px-20">
          workout
          <span className="font-normal text-black">TRACKER</span>
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
