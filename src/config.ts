// import { getDefaultConfig } from "@rainbow-me/rainbowkit";
// import { baseSepolia } from "viem/chains";
// import { connectorsForWallets } from "@rainbow-me/rainbowkit";
// import { argentWallet } from "@rainbow-me/rainbowkit/wallets";
// import { createConfig, http } from "wagmi";

// const connectors = connectorsForWallets(
//   [
//     {
//       groupName: "Recommended",
//       wallets: [argentWallet],
//     },
//   ],
//   {
//     appName: "Unix",
//     projectId: "YOUR_PROJECT_ID",
//   }
// );

// export const config = createConfig({
//   connectors,
//   chains: [baseSepolia],
//   transports: {
//     [baseSepolia.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
//   },
//   ssr: true,
// });

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia } from "viem/chains";


export const config = getDefaultConfig({
  appName: "Unix",
  projectId: "YOUR_PROJECT_ID",
  chains: [baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
