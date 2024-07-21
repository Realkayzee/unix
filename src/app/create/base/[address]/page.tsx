"use client";
import Button2 from "@/app/helpers/Button2";
import Loader from "@/components/utils/Loader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { cairo, CallData, RpcProvider } from "starknet";
import { useAccount } from "@starknet-react/core";
import useStore from "@/hooks/useStore";

const TBA = () => {
  const [loading, setLoading] = useState(false);
  const nftSelected = useStore(state => state.nftSelected)

  console.log(nftSelected, 'nft selected')

  // const starknetFactory =
  //   "0x07da5d572d99a5710fd40325edd9ec4e5d2b8cc6bb83805e6314bab9640a964a";
  // const starknetProvider = new RpcProvider({
  //   nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
  // });

  // const handleStarknetClick = async (data: any) => {
  //   try {
  //     if (data && address && account) {
  //       setLoading(true);
  //       const { abi } = await starknetProvider.getClassAt(starknetFactory);
  //       const myByteArray = byteArray.byteArrayFromString(data.token_uri);
  //       const result: string = byteArray.stringFromByteArray(myByteArray);
  //       let tokenId;
  //       tokenId = cairo.uint256(data.token_id);

  //       const callData = {
  //         contractAddress: starknetFactory,
  //         entrypoint: "create",
  //         callData: CallData.compile({
  //           name: data.name,
  //           symbol: data.symbol,
  //           base_uri: result,
  //           to: address,
  //           token_id: tokenId,
  //         }),
  //       };

  //       console.log("Compiled callData:", callData);

  //       if (account) {
  //         // Sign and send the transaction
  //         const response = await account.execute(callData);

  //         console.log(response);
  //         if (response) {
  //           toast.success("You have successfully instantiated to Starknet!", {
  //             style: {
  //               color: "#fff",
  //               padding: "4px 15px",
  //               borderRadius: "8px",
  //               background: "#890162",
  //               margin: "auto",
  //             },
  //           });
  //         }
  //       }

  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.error(error, "error");
  //     setLoading(false);
  //     toast.error("Failed to create!", {
  //       style: {
  //         color: "#fff",
  //         padding: "4px 15px",
  //         borderRadius: "8px",
  //         background: "#890162",
  //         margin: "auto",
  //       },
  //     });

  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <Loader loading={loading} />
      <div className="flex flex-col items-center min-h-[calc(100vh-7rem)] justify-center p-5 gap-8">
        <div className="text-2xl font-semibold text-center">
          <p>Create Token Bound Account for</p>
          <p>{nftSelected?.name} NFT</p>
        </div>

        <div className="flex gap-4 font-semibold text-lg">
          <Button2>Create</Button2>
          <button
            // onClick={() => handleStarknetClick(nft)}
            className="bg-button px-8 py-2 rounded-xl font-semibold"
          >
            Port to Starknet
          </button>
        </div>
        <div className="h-40 invisible"></div>
      </div>
    </>
  );
};

export default TBA;
