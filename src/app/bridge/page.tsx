'use client'
import React from "react";
import TokenSelect from "@/components/Modal/Token/TokenSelect";
import { SubmitHandler, useForm } from "react-hook-form";
import { Error } from "@/components/ErrorHandler/Error";

type bridgeInput = {
  tbaAddress1: string
  tbaAddress2: string
  starkToken: string
  baseToken: string
}

const Bridge = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<bridgeInput>()

  const onSubmit: SubmitHandler<bridgeInput> = (data) => {
    console.log(data, "bridge data");
  }

  return (
    <div  className="flex flex-col justify-center min-h-[calc(100vh-10rem)]">
      <form
        className="bg-hero rounded-2xl w-3/5 2xl:w-1/2 mx-auto p-8 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl text-center font-bold my-4">
          Bridge Token
        </h2>
        {/* Starknet token Bound Account */}
        <div className="flex flex-col gap-2">
          <label className="lg:text-xl font-semibold">
              Starknet Token Bound Account <span className="text-red-400">*</span>
          </label>
          <input
          {...register("tbaAddress1", { required: true })}
          className="bg-input rounded-2xl p-3 text-xl text-white-1 font-mono outline-none focus:outline focus:outline-1 focus:outline-button-1"
          />
          <Error
          error={errors.tbaAddress1?.type}
          />
        </div>
        {/* Base Token Bound Account */}
        <div className="flex flex-col gap-2">
          <label className="lg:text-xl font-semibold">
              Base Token Bound Account <span className="text-red-400">*</span>
          </label>
          <input
          {...register("tbaAddress2", { required: true })}
          className="bg-input rounded-2xl p-3 text-xl text-white-1 font-mono outline-none focus:outline focus:outline-1 focus:outline-button-1"
          />
          <Error
          error={errors.tbaAddress2?.type}
          />
        </div>
        {/* stark token row */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold">
              Starknet Token <span className="text-red-400">*</span>
          </label>
          <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
            <input
            {...register("starkToken", { required: true })}
            className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
            placeholder="0.00"
            />
            <div className="min-w-32 my-auto">
              <TokenSelect />
            </div>
          </div>
        </div>
        {/* Base token row */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold">
              Base Token <span className="text-red-400">*</span>
          </label>
          <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
            <input
            {...register("baseToken", { required: true })}
            className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
            placeholder="0.00"
            />
            <div className="min-w-32 my-auto">
              <TokenSelect />
            </div>
          </div>
        </div>
        <button className="w-full mt-8 rounded-xl bg-button-1 text-white font-semibold py-4">
          Bridge Token
        </button>
      </form>
    </div>
  );
};

export default Bridge;
