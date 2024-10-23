import React, { useState, useEffect } from "react";
import useCartData from "../hooks/getCartData";
import { AlertTriangleIcon, Loader } from "lucide-react";

const MainSection = () => {
  const [info, setInfo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [buying, setBuying] = useState(false);
  const data = useCartData();

  useEffect(() => {
    if (!isRemoved) {
      setInfo(data?.data?.items[0]);
    }
  }, [data, isRemoved]);

  const handleRemoveClick = () => {
    setShowPopup(true);
  };

  const confirmRemove = () => {
    setInfo(null);
    setIsRemoved(true);
    setShowPopup(false);
  };

  const handleCheckout = () => {
    setBuying(true);
  };

  const cancelRemove = () => {
    setShowPopup(false);
  };

  return !data ? (
    <div className="flex justify-center items-center w-full">
      <Loader className="animate-spin size-6" />
    </div>
  ) : buying ? (
    <>
      <div className="w-full flex flex-col py-8 gap-4 items-center justify-center">
        <div></div>
        <div>Your order has been placed</div>
        <button
          className="border-black py-2 px-4 border-2 rounded-lg"
          onClick={() => {
            setBuying(false);
            setIsRemoved(true);
          }}
        >
          Want to explore more items ?
        </button>
      </div>
    </>
  ) : isRemoved ? (
    <div className="w-full flex flex-col py-8 gap-4 items-center justify-center">
      <div>
        <AlertTriangleIcon />
      </div>
      <div>Your cart is empty right now</div>
      <button
        className="border-black py-2 px-4 border-2 rounded-lg"
        onClick={() => {
          setIsRemoved(false);
        }}
      >
        Want us to add a surprise item in your cart ?
      </button>
    </div>
  ) : (
    <>
      <div className="w-full flex flex-col lg:flex-row items-start gap-6 px-4 lg:px-6 mt-8">
        <div className="lg:w-8/12 w-full">
          <div className="hidden lg:flex font-poppins py-4 font-medium text-lg bg-[#F9F1E7] mx-4 lg:mx-8 rounded-lg">
            <div className="w-4/12 text-center text-gray-800">Product</div>
            <div className="w-2/12 text-center text-gray-800">Price</div>
            <div className="w-3/12 text-center text-gray-800">Quantity</div>
            <div className="text-gray-800">Subtotal</div>
          </div>

          <div className="flex flex-col lg:flex-row items-center mt-6 px-4 lg:px-8 py-4 border-b border-gray-200">
            <div className="w-full lg:w-4/12 flex items-center justify-center gap-3 mb-4 lg:mb-0">
              <div className="w-4/12">
                <img
                  className="rounded-xl object-cover shadow-md"
                  src={info?.image}
                  alt="Product"
                />
              </div>
              <div className="text-[#9F9F9F] text-lg">{info?.title}</div>
            </div>

            <div className="w-full lg:w-2/12 text-center mb-4 lg:mb-0">
              <div className="text-[#9F9F9F]">
                Rs.
                {(info?.final_price / 100)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>

            <div className="w-full lg:w-3/12 text-center mb-4 lg:mb-0">
              <div className="border-2 border-[#9F9F9F] w-fit mx-auto rounded-md px-2 text-black">
                {info?.quantity}
              </div>
            </div>

            <div className="w-full lg:w-auto text-center lg:text-left text-black mb-4 lg:mb-0">
              Rs.
              {(info?.final_price / 100)?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>

            <div
              className="ml-0 lg:ml-12 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={handleRemoveClick} // Trigger popup
            >
              <img src="./trash.png" alt="Remove" />
            </div>
          </div>
        </div>

        <div className="lg:w-4/12 w-full mt-6 lg:mt-0">
          <div className="p-4 bg-[#F9F1E7] flex flex-col justify-center items-center rounded-md shadow-md">
            <div className="text-center text-2xl font-semibold mb-12 text-black">
              Cart Totals
            </div>

            <div className="space-y-4 py-4">
              <div className="flex justify-between gap-x-8 lg:gap-x-16 text-sm font-semi text-black">
                <div>Subtotal</div>
                <div className="text-[#9F9F9F] text-base font-semi">
                  Rs.
                  {(info?.final_price / 100)?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
              <div className="flex justify-between gap-x-8 text-sm font-semi text-black">
                <div>Total</div>
                <div className="text-[#B88E2F] text-xl font-regular">
                  Rs.
                  {(info?.final_price / 100)?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>

            <div className="mt-2 text-center mb-12">
              <button
                className="bg-transparent text-black w-full py-3 px-12 rounded-lg border-black border-2"
                onClick={handleCheckout}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl mb-4">
              Are you sure you want to remove this item?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={confirmRemove}
              >
                Yes
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={cancelRemove}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainSection;
