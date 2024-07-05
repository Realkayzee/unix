import React from "react";
import Button2 from "../helpers/Button2";

const bridge = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black-2 rounded-3xl w-[1000px] mx-auto p-20">
          <h1 className="text-center text-4xl mb-14">Bridge Token to Base</h1>
          <div className="bg-white rounded-2xl py-6">
            <p className="text-center text-3xl text-hero">
              Select Token Bound Account
            </p>
          </div>
          <div className="bg-white-1 rounded-3xl">
            <div className="border-2 border-black-1 rounded-2xl p-6 mt-14">
              <div className="flex flex-col gap-4">
                <div className="bg-hero p-4 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xl">0.00</p>
                    <Button2>Token Select</Button2>
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
