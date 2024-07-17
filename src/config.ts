import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia } from "viem/chains";
import { implementationClassHash, registryAddress } from "./constants";


export const config = getDefaultConfig({
  appName: "Unix",
  projectId: "YOUR_PROJECT_ID",
  chains: [baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
