"use client";
import ModalFrame from "@/app/helpers/ModalFrame";
import { Error } from "@/components/ErrorHandler/Error";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
    toast.success("TBA added successfully!", {
      style: {
        color: "#fff",
        padding: "4px 15px",
        borderRadius: "8px",
        background: "#890162",
      },
    });
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
        {/* Header */}
        <div className="relative flex justify-center">
          <h1 className="font-bold text-xl mb-4">Add a Token Bound Account</h1>
        </div>
        {/* Search */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <input
              {...register("tbaAddress", { required: true })}
              className="bg-input rounded-2xl p-3 text-xl text-white-1 placeholder:text-xl placeholder:text-gray-700 placeholder:font-semibold font-mono outline-none focus:outline focus:outline-1 focus:outline-button-1"
              placeholder="Enter an Account"
            />
            <Error error={errors.tbaAddress?.type} />
          </div>
          <div>
            <button className="bg-button px-8 py-2 rounded-xl mx-auto font-semibold">
              Add Account
            </button>
          </div>
        </form>
        {/* <div className="relative">
            <input
              type="text"
              className="rounded-[40px] pl-6 pr-12 py-4 w-full text-xl placeholder:text-white-1 placeholder:font-space bg-hero outline-none focus:outline focus:outline-1 focus:outline-button-1"
              placeholder="Enter an Account"
            />
          </div> */}
      </ModalFrame>
    </div>
  );
};

export default TbaModal;
