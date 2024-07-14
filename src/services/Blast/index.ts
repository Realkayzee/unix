import axios from "axios"


const blast = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BLAST_STARK_URL
})


export const api = {
    getStarkWalletNFTs: async (address: string) => {
        const { data } = await blast.get(`/getWalletNFTs?walletAddress=${address}`)
        return data
    },
}