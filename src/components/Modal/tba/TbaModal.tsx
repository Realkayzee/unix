"use client";
import ModalFrame from "@/app/helpers/ModalFrame";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Error } from "@/components/ErrorHandler/Error";

type tbaInput = {
  tbaAddress: string;
};

const TbaModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tbaInput>();

  const onSubmit: SubmitHandler<tbaInput> = (data) => {
    console.log(data, "submitted");
  };

  return (
    <div>
      <button className="underline" onClick={() => setModalOpen(true)}>
        add TBA
      </button>
      <ModalFrame
        className="bg-[#03031d]"
        open={isModalOpen}
        setOpen={setModalOpen}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Header */}
          <div className="relative flex justify-center">
            <h1 className="font-bold text-2xl mb-4">
              Add a Token Bound Account
            </h1>
          </div>
          {/* Search */}
          <div className="relative">
            {/* <input
              type="text"
              className="rounded-[40px] pl-6 pr-12 py-4 w-full text-xl placeholder:text-neutral-200 placeholder:font-space bg-hero outline-none border border-neutral-700"
              placeholder="Enter an Address"
            /> */}
            {/* <label className=" font-semibold">
              Token Bound Account <span className="text-red-400">*</span>
            </label> */}
            <input
              {...register("tbaAddress", { required: true })}
              className="bg-input rounded-2xl p-3 text-xl text-white-1 font-mono outline-none focus:outline focus:outline-1 focus:outline-button-1"
            />
            <Error error={errors.tbaAddress?.type} />
          </div>
          <div>
            <button className="bg-button px-8 py-2 rounded-xl w-full font-semibold">
              Send
            </button>
          </div>
        </form>
      </ModalFrame>
    </div>
  );
};

export default TbaModal;
