"use client";
import StarknetWallet from "@/components/Modal/Wallet/StarknetWallet";
import { useAccount } from "@starknet-react/core";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const TBALayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const search = useSearchParams();
  const { isConnected } = useAccount()

  const PadNav = [
    {
      name: "Starknet",
      url: `/tba/starknet?tba=true&starknet=true`,
      param: "starknet",
    },
    {
      name: "Base",
      url: `/tba/base?tba=true&base=true`,
      param: "base",
    },
  ];

  return (
    <section>
      {isConnected ? (
        <div className="flex flex-col gap-5 mt-5">
          <div className="text-xl tracking-wide	mb-10 flex flex-col gap-5">
            <p className="text-[28px] text-center font-bold">
              Create Token Bound Account from your available NFTs
            </p>
            <p className="text-center text-gray-400 -mt-3">
              Lists of all available NFTs in your connected account(s)
            </p>
            <div className="w-96 bg-button-1 rounded-2xl p-1 flex gap-1">
              {PadNav.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  className={`w-full text-center py-2 text-lg outline-none border-0 rounded-2xl hover:bg-hero hover:text-white ${
                    search.get(item.param) == "true" && "text-white bg-hero"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[calc(100%-2rem)] mx-auto bg-hero rounded-xl p-5">
            {children}
          </div>
        </div>
      ):(
        <div className="flex flex-col gap-8 justify-center w-full min-h-[calc(100vh-20.8rem)]">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-center">
              Get started with Unix Multichain Manager
            </h1>
            <p className="w-1/2 mx-auto text-xl text-white-1 font-semibold text-center">
              {" "}
              Manage all your multichain activities effortlessly in one place.
              Streamline your multichain management with a single, convenient
              solution.
            </p>
          </div>
          <div className="mx-auto">
            <StarknetWallet />
          </div>
          <div className="h-40 invisible"></div>
        </div>
      )}
    </section>
  );
};

export default TBALayout;
