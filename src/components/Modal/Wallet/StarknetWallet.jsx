"use client";
import ModalFrame from "@/app/helpers/ModalFrame";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import Link from "next/link";
import { useState } from "react";

export default function StarknetWallet() {
  const { connect, connectors } = useConnect();
  const { address, isConnected, isDisconnected } = useAccount();
  const { disconnect } = useDisconnect()
  const [open, setOpen] = useState(false);

  const handleDisconnect = () => {
    disconnect()
    setOpen(false)
  }


  return (
    <>
    {isDisconnected && (
      <button
        className="bg-button px-5 lg:px-8 py-2 rounded-lg"
        onClick={() => connect({ connector: connectors[0] })}
      >
        {`Connect ${connectors[0].name}`}
      </button>
    )}
    {isConnected && (
      <button
      onClick={() => setOpen(true)}
      className="rounded-lg bg-transparent border-2 border-button text-white font-semibold outline-none px-5 lg:px-8 py-2 hover:text-white-1"
      >
        {address && address.slice(0, 4) + "..." + address.slice(-4)}
      </button>
    )}

    {/* Modal */}
    <ModalFrame open={open} setOpen={setOpen} className="max-w-lg bg-hero">
      <div className="flex flex-col gap-8 my-8">
        <Link
        href={`https://starkscan.co/contract/${address}`}
        className="text-center text-xl font-bold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        >
          {address && address.slice(0, 8) + "..." + address.slice(-8)}
        </Link>

        <button
          className="bg-button px-5 lg:px-8 py-2 rounded-lg mx-auto text-bold"
          onClick={handleDisconnect}
        >
          Disconnect
        </button>
      </div>
    </ModalFrame>
    </>
  );
}