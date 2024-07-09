"use client";
import Button1 from "@/app/helpers/Button1";
import ModalFrame from "@/app/helpers/ModalFrame";
import React, { useState } from "react";

const TbaModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button className="underline" onClick={() => setModalOpen(true)}>
        add TBA
      </button>
      <ModalFrame open={isModalOpen} setOpen={setModalOpen}>
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="relative flex justify-center">
            <h1 className="font-bold text-2xl mb-4">
              Add a Token Bound Account
            </h1>
          </div>
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              className="rounded-[40px] pl-6 pr-12 py-4 w-full text-xl placeholder:text-neutral-200 placeholder:font-space bg-hero outline-none border border-neutral-700"
              placeholder="Enter an Address"
            />
          </div>
          <div>
            <button className="bg-button px-8 py-2 rounded-xl w-full font-semibold">
              Send
            </button>
          </div>
        </div>
      </ModalFrame>
    </div>
  );
};

export default TbaModal;
