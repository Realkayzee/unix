"use client";
import { AppProps } from "next/app";
import useStore from "@/hooks/useStore";
import Link from "next/link";
import Account from "@/components/Account/Account";
import Wallet from "@/components/Modal/Wallet/Wallet";
import { argentWallet } from "@rainbow-me/rainbowkit/wallets";
import { WalletButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "@starknet-react/core";
import StarknetWallet from "@/components/Modal/Wallet/StarknetWallet";

export default function Home() {
  // const { isConnected } = useStore();
  const { isConnected } = useAccount()
  return (
    <main>
      {isConnected ? (
        <Account />
      ) : (
        <div className="flex flex-col gap-8 justify-center w-full min-h-[calc(100vh-16rem)]">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-center">
              Get started with Unix TBA Multichain Manger
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
      {}
    </main>
  );
}
