"use client";
import useStore from "@/hooks/useStore";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button2 from "@/app/helpers/Button2";
import { ReactNode } from "react";

const Wallet = ({ children }: { children: ReactNode }) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="flex justify-end"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="bg-button px-5 lg:px-8 py-2 rounded-lg"
                    onClick={openConnectModal}
                    type="button"
                  >
                    {children}
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                  onClick={openChainModal}
                  className="rounded-lg bg-transparent border-2 border-button text-white font-semibold outline-none px-5 lg:px-8 py-2 hover:text-white-1"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div>
                  <button
                  onClick={openAccountModal}
                  className="rounded-lg bg-transparent border-2 border-button text-white font-semibold outline-none px-5 lg:px-8 py-2 hover:text-white-1"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Wallet;
