import axios from "axios"


const blast = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BLAST_STARK_URL
})


export const api = {
    getStarkWalletNFTs: async (address: string) => {
        return await blast.get(`/getWalletNFTs?walletAddress=${address}`)
    },
}