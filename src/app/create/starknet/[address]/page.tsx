"use client";
import Button2 from "@/app/helpers/Button2";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/components/utils/Loader";
import { useTokenBound } from "@/hooks/useTokenBound";
import useStore from "@/hooks/useStore";
import { num } from "starknet";
import { BaseError, useWriteContract } from "wagmi";
import { abi } from "@/components/utils/abi";
import { basePortFactory } from "@/constants";


const TBA = () => {
  const [loading, setLoading] = useState(false);
  const { tokenbound } = useTokenBound()
  const nftSelected = useStore((state) => state.nftSelected);
  const { writeContract } = useWriteContract()

  console.log(nftSelected, "nftSelected")

  const handleCreate = async () => {
    setLoading(true);
    try {
      await tokenbound?.createAccount({
        tokenContract: nftSelected?.contractAddress,
        tokenId: nftSelected?.tokenId
      })
      setLoading(false)
      toast(`Account created successfully`, {
        icon: '😁',
        style: {
          color: "#fff",
          padding: "4px 15px",
          borderRadius: "8px",
          background: "#890162",
          margin: "auto",
        },
      })
    } catch (error: any) {
      console.error(error, "error");
      setLoading(false);
      toast(error?.message, {
        icon: '😭',
        style: {
          color: "#fff",
          padding: "4px 15px",
          borderRadius: "8px",
          background: "#890162",
          margin: "auto",
        },
      });
    }
  };

  const handlePortToBase = () => {
    setLoading(true);
    writeContract({
      abi,
      address: basePortFactory,
      functionName: "port",
      args: [
        nftSelected?.contractName,
        nftSelected?.contractSymbol,
        nftSelected?.tokenUri,
        nftSelected?.tokenId
      ]
    }, {
      onSuccess: (data) => {
        setLoading(false);
        toast(`Account ported successfully`, {
          icon: '😁',
          style: {
            color: "#fff",
            padding: "4px 15px",
            borderRadius: "8px",
            background: "#890162",
            margin: "auto",
          },
        })
      },
      onError: (e) => {
        const error = e as BaseError
        console.log(error, "error")
        setLoading(false);
        toast(error?.shortMessage, {
          icon: '😭',
          style: {
            color: "#fff",
            padding: "4px 15px",
            borderRadius: "8px",
            background: "#890162",
            margin: "auto",
          },
        });
      }
    })

  }

  return (
    <>
      <Loader loading={loading} />
      <div className="flex flex-col items-center min-h-[calc(100vh-7rem)] justify-center p-5 gap-6">
        <div className="text-2xl font-semibold text-center">
          <p>Create Token Bound Account for</p>
          <p>{nftSelected?.contractName} NFT</p>
        </div>

        <div className="flex gap-4 font-semibold text-lg">
          <Button2 onClick={() => handleCreate()}>Create</Button2>
          <button
          className="bg-button px-8 py-2 rounded-xl font-semibold hover:text-white-1"
          onClick={handlePortToBase}
          >
            Port to base
          </button>
        </div>
        <div className="h-40 invisible"></div>
      </div>
    </>
  );
};

export default TBA;
