import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for hamburger and close

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-6 py-6">
        <div className="flex items-center gap-1">
          <img src="/logomeubel.png" className="w-12 h-auto" alt="Logo" />
          <div className="text-lg md:text-3xl font-bold">Marmeto</div>
        </div>

        {!isOpen && (
          <div
            className={`lg:flex items-center gap-16 font-semibold ${
              isOpen ? "block" : "hidden"
            } lg:block`}
          >
            <div>Home</div>
            <div>Shop</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        )}

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-8">
          <img src="/search.png" className="w-4 md:w-6 h-auto" alt="Search" />
          <img src="/heart.png" className="w-4 md:w-6 h-auto" alt="Favorites" />
          <img src="/cart.png" className="w-4 md:w-6 h-auto" alt="Cart" />
          <div className="lg:hidden">
            {isOpen ? (
              <X onClick={toggleMenu} className="w-4 h-4 cursor-pointer" />
            ) : (
              <Menu onClick={toggleMenu} className="w-4 h-4 cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 py-4 font-semibold">
          <div>Home</div>
          <div>Shop</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      )}
    </div>
  );
};

export default Header;
