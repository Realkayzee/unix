"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/Blast";
import { useAccount } from "@starknet-react/core";
import useStore from "@/hooks/useStore";
import Image from "next/image";

const Starknet = () => {
  const router = useRouter();
  const { address } = useAccount()
  const setNFTSelected = useStore((state) => state.setNftSelected);

  const { data, isLoading } = useQuery({
    queryKey: ["getNFTData"],
    queryFn: async () => await api.getStarkWalletNFTs(address!),
    enabled: !!address,
  });

  const handleTokenSelect = (nft: any) => {
    router.push(`/create/starknet/${nft.contractAddress}`)
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
          data?.nfts.map((nft:any, index:any) => (
            <div
            className="cursor-pointer w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] aspect-square rounded-lg"
            key={index}
            onClick={() => handleTokenSelect(nft)}
            >
              {(nft.cachedImage === null || nft.cachedImage === undefined) ? (
                <div className="border-button-1 border-4 w-full h-full">
                  <div className="w-full h-full flex flex-col gap-2 justify-center bg-hero">
                      <p className="text-center font-bold text-gray-600 text-4xl text-wrap">{nft.contractSymbol}</p>
                      <p className="text-center font-bold text-gray-600 text-2xl text-wrap">{nft.tokenId}</p>
                  </div>
                </div>
              ): (
                <Image
                src={nft.cachedImage?.url}
                alt={nft.contractSymbol}
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

export default Starknet;
