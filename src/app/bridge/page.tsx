import React from "react";
import Button2 from "../helpers/Button2";
import TokenSelect from "@/components/Modal/Token/TokenSelect";
import Account from "@/components/Account/Account";

const bridge = () => {
  return (
    <>
      <Account />
      {/* <div className="flex flex-col justify-center min-h-[calc(100vh-7rem)]">
        <div className="bg-hero rounded-2xl w-1/2 mx-auto lg:px-5 2xl:px-10 lg:py-10 2xl:py-16">
          <h1 className="text-center text-4xl mb-14">Bridge Token to Base</h1>
          <div className="bg-white-2 rounded-2xl p-6">
            <label className="text-2xl" htmlFor="tokenBound">
              Select Token Bound Account
            </label>
            <input
              placeholder="0x..."
              type="text"
              className="bg-white rounded-2xl py-2 text-xl text-hero lg:w-full border-none outline-none"
            />
          </div>
          <div className="bg-white-2 rounded-3xl">
            <div className="border-2 border-black-1 rounded-2xl p-6 mt-14">
              <div className="flex flex-col gap-4">
                <div className="bg-hero p-4 rounded-2xl">
                  <div className="flex items-center gap-2 justify-between">
                    <input
                      placeholder="0.00"
                      type="number"
                      className="bg-white rounded-2xl py-2 text-xl text-hero border-none outline-none"
                    />
                    <TokenSelect />
                  </div>
                </div>
                <button className="bg-button px-8 py-4 rounded-xl font-semibold">
                  Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default bridge;
