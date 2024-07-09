import Button2 from "@/app/helpers/Button2";
import React from "react";

const explore = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center bg-black-1 justify-between rounded-2xl border-button-1 border-2 p-2"
        >
          <p className="font-mono">
            <span className="mr-4">{index} .</span>
            0x85f452bAeC34a3475464Ba7130081b587BbF0472
          </p>
          <div className="flex gap-4 align-center">
            <Button2>Copy</Button2>
            <button className="bg-button px-8 py-2 rounded-xl font-semibold">
              Send
            </button>
            <button className="bg-button px-8 py-2 rounded-xl font-semibold">
              Bridge
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default explore;
