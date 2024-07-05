import React from "react";
import Button2 from "../helpers/Button2";
import TokenSelect from "@/components/Modal/Token/TokenSelect";

const bridge = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black-2 rounded-3xl lg:w-[1000px] mx-auto p-20">
          <h1 className="text-center text-4xl mb-14">Bridge Token to Base</h1>
          <div>
            <label className="text-2xl" htmlFor="tokenBound">
              Select Token Bound Account
            </label>
            <input
              placeholder="0x..."
              type="text"
              className="bg-white rounded-2xl py-2 text-xl text-hero lg:w-full border-none outline-none"
            />
          </div>
          <div className="bg-white-1 rounded-3xl">
            <div className="border-2 border-black-1 rounded-2xl p-6 mt-14">
              <div className="flex flex-col gap-4">
                <div className="bg-hero p-4 rounded-2xl">
                  <div className="flex items-center gap-2 justify-between">
                    <input
                      placeholder="0.00"
                      type="number"
                      className="bg-white rounded-2xl lg:w-[575px] py-2 text-xl text-hero border-none outline-none"
                    />
                    <TokenSelect />
                  </div>
                </div>
                <Button2 className="py-4">Swap</Button2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default bridge;
