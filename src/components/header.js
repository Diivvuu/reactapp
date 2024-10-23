import React from "react";
const Header = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-11 py-6">
        <div className="flex items-center gap-1">
          <img src="/logomeubel.png" />
          <div className="text-3xl font-bold">Marmeto</div>
        </div>
        <div className="flex justify-center items-center gap-16 font-semibold">
          <div>Home</div>
          <div>Shop</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex items-center justify-between gap-8">
          <div>
            <img src="/search.png" />
          </div>
          <div>
            <img src="/heart.png" />
          </div>
          <div>
            <img src="/cart.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
