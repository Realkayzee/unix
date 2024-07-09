'use client'
import React from "react";
import TokenSelect from "@/components/Modal/Token/TokenSelect";
import { SubmitHandler, useForm } from "react-hook-form";
import { Error } from "@/components/ErrorHandler/Error";

type swapInput = {
  tbaAddress: string;
  amountToSell: string;
  amountToBuy: string;
};

const Swap = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<swapInput>()

  const onSubmit: SubmitHandler<swapInput> = (data) => {
    console.log(data, "submitted")
  }


  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-7rem)]">
      <form
        className="bg-hero rounded-2xl w-3/5 2xl:w-1/2 mx-auto p-8 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl text-center font-bold my-4">
          Token Swap
        </h2>
        {/* Token Bound Account input */}
        <div className="flex flex-col gap-2">
          <label className="lg:text-xl font-semibold">
              Token Bound Account <span className="text-red-400">*</span>
          </label>
          <input
          {...register("tbaAddress", { required: true })}
          className="bg-input rounded-2xl p-3 text-xl text-white-1 font-mono outline-none focus:outline focus:outline-1 focus:outline-button-1"
          />
          <Error
          error={errors.tbaAddress?.type}
          />
        </div>
        {/* Sell token row */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold">
              Sell <span className="text-red-400">*</span>
          </label>
          <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
            <input
            {...register("tbaAddress", { required: true })}
            className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
            placeholder="0.00"
            />
            <div className="min-w-32 my-auto">
              <TokenSelect />
            </div>
          </div>
        </div>
        {/* Buy token row */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold">
              Buy <span className="text-red-400">*</span>
          </label>
          <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
            <input
            {...register("tbaAddress", { required: true })}
            className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
            placeholder="0.00"
            />
            <div className="min-w-32 my-auto">
              <TokenSelect />
            </div>
          </div>
        </div>
        <button className="w-full mt-8 rounded-xl bg-button-1 text-white font-semibold py-4">
          Confirm Swap
        </button>
      </form>
    </div>
  );
};

export default Swap;
