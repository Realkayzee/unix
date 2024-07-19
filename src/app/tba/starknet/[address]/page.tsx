"use client";
import Button2 from "@/app/helpers/Button2";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "@starknet-react/core";
import { TokenboundClient } from "starknet-tokenbound-sdk";
import { tokenBoundOptions } from "@/config";
import toast from "react-hot-toast";
import Loader from "@/components/utils/Loader";

const TBA = () => {
  const searchParams = useSearchParams();
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(false);
  const { account } = useAccount();

  const tokenbound =
    account &&
    new TokenboundClient({
      account: account,
      ...tokenBoundOptions,
    });

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      const parsedData = JSON.parse(decodeURIComponent(data));
      setNft(parsedData);
    }
  }, [searchParams]);

  const handleCreate = async (data: any) => {
    try {
      if (tokenbound && data) {
        setLoading(true);
        const response = await tokenbound.createAccount({
          tokenContract: data?.contractAddress,
          tokenId: data?.tokenId,
          salt: "arbitrary number",
        });

        console.log(response); // Handle the response as needed

        toast.success("Account created successfully😁!", {
          style: {
            color: "#fff",
            padding: "4px 15px",
            borderRadius: "8px",
            background: "#4BB543",
            margin: "auto",
          },
        });
      }
    } catch (error) {
      console.error(error, "error");
      setLoading(false);
      toast.error("Failed to create TBA😭!", {
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
          <Button2 onClick={() => handleCreate(nft)}>Create</Button2>
          <Link href={"#"}>
            <button className="bg-button px-8 py-2 rounded-xl font-semibold">
              Instantiate to base
            </button>
          </Link>
        </div>
        <div className="h-40 invisible"></div>
      </div>
    </>
  );
};

export default TBA;
