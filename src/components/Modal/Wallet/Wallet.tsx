"use client";
import useStore from "@/hooks/useStore";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button2 from "@/app/helpers/Button2";
import { ReactNode } from "react";

const Wallet = ({ children }: { children: ReactNode }) => {
  const { isConnected, setIsConnected } = useStore();

  console.log(isConnected);
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
        if (connected) {
          setIsConnected(true); // Update isConnected state to true when connected
        } else {
          setIsConnected(false); // Optionally set isConnected to false when not connected
        }

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
            className="flex justify-end gap-8 mr-10 py-2"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="bg-button px-8 py-2 rounded-xl"
                    onClick={openConnectModal}
                    type="button"
                  >
                    {children}
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  {/* <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button> */}

                  <Button2 onClick={openAccountModal}>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </Button2>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
    // <div className="flex justify-end gap-8 mr-10 pt-8 bg-transparent">
    //   <Link href="/">
    //     <p className="bg-button px-8 py-2 rounded-xl">
    //       {" "}
    //       <ConnectButton label="Connect Metamask" accountStatus="address" />
    //     </p>
    //   </Link>
    //   <Link href="/">
    //     <button className="bg-button px-8 py-2 rounded-xl">
    //       {" "}
    //       Connect Argent
    //     </button>
    //   </Link>
    // </div>
  );
};

export default Wallet;
