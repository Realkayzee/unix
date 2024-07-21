"use client";
import Button2 from "@/app/helpers/Button2";
import ModalFrame from "@/app/helpers/ModalFrame";
import React, { useState } from "react";
import { TokenAnimation } from "./TokenAnimation";

const TokenSelect = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
      onClick={() => setModalOpen(true)}
      className="w-full rounded-xl bg-button-1 text-white font-semibold outline-none px-2 py-[6px] hover:text-white-1 basis-32"
      type="button"
      >
        Select Token
      </button>
      {/* <Button2 onClick={() => setModalOpen(true)}>Token Select</Button2> */}
      <ModalFrame open={isModalOpen} setOpen={setModalOpen} className="bg-[#03031d]">
        {/* Header */}
        <div className="relative flex justify-center">
          <h1 className="font-bold text-2xl mb-4">Select a token</h1>
        </div>
        {/* Search */}
        {/* <div className="relative">
          <input
            type="text"
            className="rounded-[40px] pl-6 pr-12 py-4 w-full text-xl placeholder:text-neutral-200 placeholder:font-space bg-hero outline-none border border-neutral-700"
            placeholder="Search by Name / Address"
          />
        </div> */}
        {/* Balance */}
        <div className="flex flex-col gap-1">
          {/* header */}
          <div className="mt-6 bg-input py-4 rounded-tr-3xl rounded-tl-3xl font-bold text-sm sm:text-base text-center">
            Assets
          </div>
          {/* body */}
          <div className="bg-input rounded-b-3xl h-[330px] p-2 sm:p-4 flex flex-col gap-4 overflow-y-auto token-scroll">
            <TokenAnimation />
          </div>
        </div>
      </ModalFrame>
    </>
  );
};

export default TokenSelect;
