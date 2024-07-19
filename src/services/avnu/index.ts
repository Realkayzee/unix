import { computeAmount } from "@/components/utils/helpers"
import axios from "axios"
import { api } from "../Blast"

const avnu = axios.create({
    baseURL: "https://starknet.api.avnu.fi"
})

export interface quoteType {
    sellTokenAddress: string
    buyTokenAddress: string
    sellAmount: string
    takerAddress: string
}

export interface calldataType extends quoteType {
    decimals: number
}

export type buildType = {
    quoteId: string
    takerAddress: string
    slipage: number
    includeApprove: boolean
}

export const avnuApi = {
    getTokens: async () => {
        try {
            const { data } = await avnu.get("/swap/v2/tokens")

            return data
        } catch(err) {
            console.error(err)
        }
    },
    getQuote: async (data: quoteType) => {
        const {
            sellTokenAddress,
            buyTokenAddress,
            sellAmount,
            takerAddress
        } = data

        try {
            const { data: quote } =  await avnu.get(`swap/v2/quotes?sellTokenAddress=${sellTokenAddress}&buyTokenAddress=${buyTokenAddress}&sellAmount=${sellAmount}&takerAddress=${takerAddress}`)
            return quote
        } catch(err) {
            console.error(err)
        }
    },

    buildData: async (data: buildType) => {
        try {
            const { data: buildData } = await avnu.post(`swap/v2/build`, data)

            return buildData
        } catch(err) {
            console.error(err)
        }
    },
}

export const computeCalldata = async ({sellTokenAddress, buyTokenAddress, sellAmount, decimals, takerAddress}: calldataType) => {
    const amount = computeAmount(sellAmount, decimals)
    const quote = await avnuApi.getQuote({sellTokenAddress, buyTokenAddress, sellAmount: amount, takerAddress})
    const quoteId = quote[0].quoteId

    const calldata = await avnuApi.buildData({quoteId, takerAddress, slipage: 0.05, includeApprove: true})

    return calldata
}