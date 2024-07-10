"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/config";
import { ReactNode } from "react";
import merge from 'lodash.merge'

// Setup RainbowKit and Wagmi
const queryClient = new QueryClient();

export default function Provider({ children }: { children: ReactNode }) {
  const unixTheme = merge(darkTheme(), {
    colors: {
      modalBackground: "#03031d"
    }
  })

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" theme={unixTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
