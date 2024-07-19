import axios from "axios"


const blast = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BLAST_STARK_URL
})


export const api = {
    getStarkWalletNFTs: async (address: string) => {
        try {
            const { data } = await blast.get(`/getWalletNFTs?walletAddress=${address}`)
            return data
        } catch(err) {
            console.error(err)
        }
    },
    getNFT: async (contractAddress: string, tokenId: string) => {
        try {
            const { data } = await blast.get(`/getNFT?contractAddress=${contractAddress}&tokenId=${tokenId}`)

            return data
        } catch(err) {
            console.error(err)
        }
    },
    getWalletTokenBalances: async (walletAddress: string) => {
        try {
            const { data } = await blast.get(`/getWalletTokenBalances?walletAddress=${walletAddress}`)

            return data?.tokenBalances
        } catch(err) {
            console.error(err)
        }
    },
    getTokenDetails: async (contractAddress: string) => {
        try {
            const { data } = await blast.get(`/getTokenMetadata?contractAddress=${contractAddress}`)
            return data
        } catch(err) {
            console.error(err)
        }
    }
}