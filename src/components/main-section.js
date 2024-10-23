import React from "react";
import useCartData from "../hooks/getCartData";

const MainSection = () => {
  const data = useCartData();
  const info = data?.data?.items[0];

  return (
    <div className="w-full flex items-start gap-x-6  px-6 mt-8">
      <div className="lg:w-8/12 w-full">
        <div className="flex font-poppins py-4 font-medium text-lg bg-[#F9F1E7] mx-8 rounded-lg">
          <div className="w-4/12 text-center text-gray-800">Product</div>
          <div className="w-2/12 text-center text-gray-800">Price</div>
          <div className="w-3/12 text-center text-gray-800">Quantity</div>
          <div className="text-gray-800">Subtotal</div>
        </div>
        <div className="flex items-center mt-6 px-8 mx-12 py-4 border-b border-gray-200">
          <div className="w-4/12 flex items-center gap-3">
            <div className="w-4/12">
              <img
                className="rounded-xl object-cover shadow-md"
                src={info?.image}
                alt="Product"
              />
            </div>
            <div className="text-[#9F9F9F] text-lg">{info?.title}</div>
          </div>
          <div className="w-2/12 text-center">
            <div className="text-[#9F9F9F]">
              Rs.
              {(info?.final_price / 100)?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="w-3/12 text-center">
            <div className="border-2 border-[#9F9F9F]  w-fit mx-auto  rounded-md px-2 text-black">
              {info?.quantity}
            </div>
          </div>
          <div className="text-black">
            Rs.
            {(info?.final_price / 100)?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="ml-12 cursor-pointer hover:opacity-70 transition-opacity">
            <img src="./trash.png" alt="Remove" />
          </div>
        </div>
      </div>
      <div className="lg:w-4/12 w-full">
        <div className="p-4 bg-[#F9F1E7] flex flex-col justify-center items-center rounded-md shadow-md">
          <div className="text-center text-2xl font-semibold mb-12 text-black">
            Cart Totals
          </div>
          <div className="space-y-4 py-4">
            <div className="flex justify-between gap-x-16 text-sm font-semi text-black">
              <div>Subtotal</div>
              <div className="text-[#9F9F9F] text-base font-semi">
                Rs.
                {(info?.final_price / 100)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
            <div className="flex justify-between text-sm font-semi text-black">
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
            <button className="bg-transparent text-black w-full py-3 px-12 rounded-lg border-black border-2">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
