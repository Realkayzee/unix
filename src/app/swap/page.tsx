'use client'
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Error } from "@/components/ErrorHandler/Error";
import BaseToken from "@/components/Modal/Token/BaseToken";
import QuoteToken from "@/components/Modal/Token/QuoteToken";
import { avnuApi, computeCalldata } from "@/services/avnu";
import useStore from "@/hooks/useStore";
import { useSearchParams } from "next/navigation";
import { computeAmount } from "@/components/utils/helpers";
import { useTokenBound } from "@/hooks/useTokenBound";
import toast from "react-hot-toast";
import Loader from "@/components/utils/Loader";

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
    setValue,
    getValues,
  } = useForm<swapInput>()
  const baseToken = useStore(state => state.baseToken)
  const quoteToken = useStore(state => state.quoteToken)
  const { tokenbound } = useTokenBound()
  const [isLoading, setLoading] = useState<boolean>(false)

  const search = useSearchParams()
  const tba = search.get("tba")

  const computeQuote = () => {
    let sellAmount = getValues("amountToSell")

    avnuApi.getQuote({
      sellTokenAddress: baseToken?.contractAddress,
      buyTokenAddress: quoteToken?.address,
      sellAmount: !!sellAmount ? computeAmount(sellAmount, Number(baseToken?.contractDecimals)): "0x00",
      takerAddress: tba!
    }).then((quote) => {
      setValue("amountToBuy", quote ? (quote[0].buyAmountInUsd / quote[0].buyTokenPriceInUsd).toString() : "0.00")
    })
  }

  const onSubmit: SubmitHandler<swapInput> = async (data) => {
    setLoading(true)
    const calldataParams = {
      sellTokenAddress: baseToken?.contractAddress,
      buyTokenAddress: quoteToken?.address,
      sellAmount: data.amountToSell,
      decimals: baseToken?.contractDecimals,
      takerAddress: data.tbaAddress
    }
    const calldata = await computeCalldata(calldataParams)

    try {
      await tokenbound.execute(data.tbaAddress, calldata)

      setLoading(false)
      toast.success("Transaction Successful", {
        style: {
          color: "#fff",
          padding: "4px 15px",
          borderRadius: "8px",
          background: "#890162",
          margin: "auto"
          },
      })
    } catch(err:any) {
      setLoading(false)
      toast.error(err?.message, {
        style: {
          color: "#fff",
          padding: "4px 15px",
          borderRadius: "8px",
          background: "#890162",
          margin: "auto"
          },
      })
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-7rem)]">
      <Loader loading={isLoading}/>
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
          {...register("tbaAddress", {
            required: true,
            pattern: /^(0x){1}[0-9a-fA-F]{60,66}$/
          })}
          className="bg-input rounded-2xl p-3 text-xl text-white-1 font-mono outline-none focus:outline focus:outline-1 focus:outline-button-1"
          defaultValue={tba ? tba : ""}
          />
          <Error
          error={errors.tbaAddress?.type}
          patternMessage="A valid address is required"
          />
        </div>
        {/* Sell token row */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold">
              Sell <span className="text-red-400">*</span>
          </label>
          <div className="flex flex-col gap-1">
            <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
              <input
              {...register("amountToSell", { required: true })}
              className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
              placeholder="0.00"
              onBlur={() => computeQuote()}
              />
              <div className="min-w-32 my-auto">
                <BaseToken
                asset={baseToken ? baseToken?.contractSymbol : "ETH"}
                />
              </div>
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
            {...register("amountToBuy", {
              required: true,
            })}
            className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
            placeholder="0.00"
            readOnly={true}
            />
            <div className="min-w-32 my-auto">
              <QuoteToken />
            </div>
          </div>
        </div>
        <button
        className="w-full mt-8 rounded-xl bg-button-1 text-white font-semibold py-4 cursor-pointer hover:text-white-1"
        >
          Confirm Swap
        </button>
      </form>
    </div>
  );
};

export default Swap;
