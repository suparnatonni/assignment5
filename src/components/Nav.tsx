
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className=" bg-white border-b border-gray-200">
      <div className=" container mx-auto flex justify-between items-center">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li><a href="" className="text-pink-600">Home</a></li>
          <li ><a href="" className="text-gray-600">Technologies</a></li>
          <li><a href="" className="text-gray-600">Projects</a></li>
          <li> <a href="" className="text-gray-600">About</a></li>
          <li><a href="" className="text-gray-600">Contact</a></li>
         
        </ul>
        
         <div className="flex items-center gap-5">

          <button className="text-gray-700 text-sm font-medium">
            Sign In
          </button>

          <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full text-sm font-medium">
            Sign Up
          </button>

        </div>
       
      </div>
    </nav>
  );
};

export default Nav;

