import { implementationClassHash, registryAddress } from "@/constants"
import { useAccount } from "@starknet-react/core"
import { TokenboundClient } from "starknet-tokenbound-sdk"

export const useTokenBound = () => {
    const { account } = useAccount()
    const options = {
        account: account,
        registryAddress: registryAddress,
        implementationAddress: implementationClassHash,
        jsonRPC: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    }

    let tokenbound: any;
    if(account) {
        tokenbound = new TokenboundClient(options)
    }

    return { tokenbound }
}