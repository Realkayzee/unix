import React from "react";
import Button2 from "../helpers/Button2";
import TokenSelect from "@/components/Modal/Token/TokenSelect";

const swap = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black-2 rounded-3xl w-[1000px] mx-auto p-20">
          <div>
            <label className="text-2xl mb-10" htmlFor="tokenBound">
              Select Token Bound Account
            </label>
            <input
              placeholder="0x..."
              type="text"
              className="bg-white rounded-2xl py-2 text-xl text-hero w-full lg:w-full border-none outline-none"
            />
          </div>
          <div className="bg-white-1 rounded-3xl">
            <div className="border-2 border-black-1 rounded-2xl p-6 mt-14">
              <div className="flex flex-col gap-4">
                <div className="bg-hero p-4 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <input
                      placeholder="0.00"
                      type="number"
                      className="bg-white rounded-2xl lg:w-[580px] py-2 text-xl text-hero border-none outline-none"
                    />
                    <TokenSelect />
                  </div>
                </div>
                <div className="bg-hero p-4 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <input
                      placeholder="0.00"
                      type="number"
                      className="bg-white rounded-2xl w-[580px] py-2 text-xl text-hero border-none outline-none"
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

export default swap;
