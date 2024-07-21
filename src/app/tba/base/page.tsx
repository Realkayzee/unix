"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import useNftData from "@/hooks/useNftData";
import Image from "next/image";
import useStore from "@/hooks/useStore";

const Base = () => {
  const router = useRouter();
  const { address } = useAccount();
  const setNFTSelected = useStore((state) => state.setNftSelected);

  const { data, isLoading } = useNftData({
    address: "0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e"
  })

  console.log(data, isLoading, 'data')

  const handleTokenSelect = (nft: any) => {
    router.push(`/create/base/${nft.token_address}`)
    setNFTSelected(nft)
  }

  return (
    <>
      <div className="flex flex-wrap gap-8">
        {isLoading ? (
          Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-800 cursor-pointer border-button-1 rounded-lg border-2 p-4 w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] h-[300px]"
            ></div>
          ))
        ): (
          data?.result.map((nft:any, index:any) => (
            <div
            className="cursor-pointer w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] aspect-square rounded-lg"
            key={index}
            onClick={() => handleTokenSelect(nft)}
            >
              {(nft.collection_logo === null || nft.collection_logo === undefined) ? (
                <div className="border-button-1 border-4 w-full h-full">
                  <div className="w-full h-full flex flex-col gap-2 justify-center bg-hero">
                      <p className="text-center font-bold text-gray-600 text-4xl text-wrap break-words">{nft.symbol}</p>
                      <p className="text-center font-bold text-gray-600 text-2xl text-wrap break-words">{nft.token_id}</p>
                  </div>
                </div>
              ): (
                <Image
                src={nft.collection_logo}
                alt={nft.symbol}
                width={320}
                height={320}
                className="w-full h-full"
                />
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Base;
