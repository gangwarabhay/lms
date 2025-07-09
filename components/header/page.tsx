import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-400 h-21  text-xl   ">
      <nav>
        <div>
          <ul className="flex space-x-6 p-4 ">
            <div className="w-30">
              {" "}
              <img className="h-15 " src="navlogo.png" alt="" />
            </div>
            <a>Home</a>
            <a>Services</a>
            <a>Resouces</a>
            <a>About</a>
            <a>Reviews</a>
            <a>Contact</a>
            <i className="fas fa-search text-gray-700 text-lg cursor-pointer ml-120 flex justify-center items-center"></i>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
