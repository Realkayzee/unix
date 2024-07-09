"use client";
import { AppProps } from "next/app";
import useStore from "@/hooks/useStore";
import Link from "next/link";
import Account from "@/components/Account/Account";
import Wallet from "@/components/Modal/Wallet/Wallet";
import { argentWallet } from "@rainbow-me/rainbowkit/wallets";
import { WalletButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const { isConnected } = useStore();
  return (
    <main className="flex flex-col gap-8 w-full min-h-[calc(100vh-7rem)] justify-center">
      {isConnected ? (
        <Account />
      ) : (
        <div>
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

          <div className="min-w-md flex items-center justify-center gap-8">
            <Wallet>Connect</Wallet>
            {/* <WalletButton wallet="metamask" /> */}
          </div>
          <div className="h-40 invisible"></div>
        </div>
      )}
    </main>
  );
}
