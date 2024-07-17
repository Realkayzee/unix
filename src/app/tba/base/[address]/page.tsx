"use client";
import Button2 from "@/app/helpers/Button2";
import Loader from "@/components/utils/Loader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Account, byteArray, Contract, RpcProvider } from "starknet";
import { useAccount } from "@starknet-react/core";

const TBA = () => {
  const searchParams = useSearchParams();
  const [nft, setNft] = useState(null);

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      const parsedData = JSON.parse(decodeURIComponent(data));
      setNft(parsedData);
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const { address }: any = useAccount();
  console.log(address);

  const starknetFactory =
    "0x07da5d572d99a5710fd40325edd9ec4e5d2b8cc6bb83805e6314bab9640a964a";
  const starknetProvider = new RpcProvider({
    nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
  });

  const handleClick = async (data: any) => {
    setLoading(true);

    try {
      if (data) {
        const { abi } = await starknetProvider.getClassAt(starknetFactory);
        const contract = new Contract(abi, starknetFactory, starknetProvider);
        contract.connect(address);

        const myByteArray = byteArray.byteArrayFromString(data.token_uri);
        const result: String = byteArray.stringFromByteArray(myByteArray);
        const create = contract.populate("create", [
          data.name,
          data.symbol,
          result,
          address,
          data.token_id,
        ]);

        console.log("Create", create);

        if (create) {
          toast.success("You have successfully created!", {
            style: {
              color: "#fff",
              padding: "4px 15px",
              borderRadius: "8px",
              background: "#890162",
              margin: "auto",
            },
          });
        }

        setLoading(false);
      }
    } catch (error) {
      console.error(error, "error");
      setLoading(false);
      toast.error("Failed to create!", {
        style: {
          color: "#fff",
          padding: "4px 15px",
          borderRadius: "8px",
          background: "#890162",
          margin: "auto",
        },
      });

      setLoading(false);
    }
  };

  return (
    <>
      <Loader loading={loading} />
      <div className="flex flex-col items-center min-h-[calc(100vh-7rem)] justify-center p-5 gap-8">
        <div className="text-3xl text-center">
          <p>Create Token Bound Account for</p>
          <p>"the NFT name selected"</p>
        </div>

        <div className="flex gap-5">
          <Button2>Create</Button2>
          <Link href={"#"}>
            <button
              onClick={() => handleClick(nft)}
              className="bg-button px-8 py-2 rounded-xl font-semibold"
            >
              Instantiate to Starknet
            </button>
          </Link>
        </div>
        <div className="h-40 invisible"></div>
      </div>
    </>
  );
};

export default TBA;
