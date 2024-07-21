import { useWalletClient } from "wagmi";
import { TokenboundClient } from '@tokenbound/sdk'

export const useBaseTokenBound = () => {
    const walletClient: any = useWalletClient()

    let baseTokenBound: any;

    if(walletClient) {
        baseTokenBound = new TokenboundClient({ walletClient, chainId: 8453})
    }

    return { baseTokenBound }
}