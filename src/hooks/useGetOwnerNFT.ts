import { api } from "@/services/Blast"
import { useQuery } from "@tanstack/react-query"
import { num } from "starknet"
import { useTokenBound } from "./useTokenBound"

const useGetOwnerNFT = ({
    boundAccount
}: {
    boundAccount: string
}) => {
    const { tokenbound } = useTokenBound()
    const getToken = async (
        tokenbound: any, 
        boundAccount: string
    ) => {
        try {
            const ownerNFT = await tokenbound.getOwnerNFT(boundAccount)

            const tokenAddress = num.toHex(ownerNFT[0])
            const tokenId = ownerNFT[1].toString()

            const data = await api.getNFT(tokenAddress, tokenId)

            return data
        } catch(err) {
            console.error(err)
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ["getOwnerNFT", tokenbound, boundAccount],
        queryFn: () => getToken(tokenbound, boundAccount),
        enabled: (tokenbound !== undefined)
    })

    return {
        data,
        isLoading
    }
}

export default useGetOwnerNFT;