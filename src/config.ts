import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia, base } from "viem/chains";
import { implementationClassHash, registryAddress } from "./constants";
import { RpcProvider } from "starknet";


export const config = getDefaultConfig({
  appName: "Unix",
  projectId: "YOUR_PROJECT_ID",
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const starknetProvider = new RpcProvider({ nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}` })
