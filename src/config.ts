import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia } from "viem/chains";
import { implementationClassHash, registryAddress } from "./constants";


export const config = getDefaultConfig({
  appName: "Unix",
  projectId: "YOUR_PROJECT_ID",
  chains: [baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const tokenBoundOptions = {
  registryAddress: registryAddress,
  implementationAddress: implementationClassHash,
  jsonRPC: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
}
