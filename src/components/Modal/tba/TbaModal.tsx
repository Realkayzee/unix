"use client";
import ModalFrame from "@/app/helpers/ModalFrame";
import { Error } from "@/components/ErrorHandler/Error";
import Loader from "@/components/utils/Loader";
import { tokenBoundOptions } from "@/config";
import { useAccount } from "@starknet-react/core";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { num } from "starknet";
import { TokenboundClient } from "starknet-tokenbound-sdk";

type tbaInput = {
  tbaAddress: string;
};

const TbaModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tbaAddress, setTbaAddress] = useState<string>('')
  const { account, address } = useAccount()
  const tokenbound = account && new TokenboundClient({
    account: account,
    ...tokenBoundOptions
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<tbaInput>();

  // const { data, isLoading:tbaLoading } = useGetOwner({
  //   accountAddress: tbaAddress,
  //   setTbaAddress: setTbaAddress,
  //   enabled: !!tbaAddress
  // })

  // console.log(data, 'data', tbaLoading, 'isLoading', tbaAddress, "tba");


  const onSubmit: SubmitHandler<tbaInput> = async (data) => {
    try {
      const ownerNFT = await tokenbound?.getOwnerNFT(data.tbaAddress)
      const tokenAddress = num.toHex(ownerNFT[0])
      const tokenId = ownerNFT[1].toString()

      console.log(tokenAddress, tokenId, 'token address');

      setValue("tbaAddress", "")
      setModalOpen(false)

    } catch(err) {
      console.error(err, 'error')
      toast.error("You are not the owner of the account", {
        style: {
            color: "#fff",
            padding: "4px 15px",
            borderRadius: "8px",
            background: "#890162",
            margin: "auto"
            },
        });
    }
    // setTbaAddress(data.tbaAddress)
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
            <Error
            error={errors.tbaAddress?.type}
            />
          </div>
          <button
          type="submit"
          className="bg-button px-8 py-2 rounded-xl mx-auto font-semibold">
            Add Account
          </button>
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
