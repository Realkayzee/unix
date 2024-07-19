'use client'
import Button2 from "@/app/helpers/Button2";
import Tokens from "@/components/Tokens/Tokens";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/Blast";

const TokenAsset = () => {
    const { tba } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['getBalance'],
        queryFn: async () =>
            await api.getWalletTokenBalances("0x024De3eddBb15440e52b7f1D78AE69C3f429B7F9f71d0671A12De613f59398DD")
    })

    return (
        <div className="bg-hero rounded-2xl shadow-lg border-hero border-2">
            <div className="text-center mt-6 mb-3">
            <h2 className="text-2xl font-bold">Tokens available</h2>
            <p>
                List of all tokens associated to the connected account
            </p>
            </div>
            <div className="p-5 flex flex-col gap-4">
                <Tokens
                tokenBoundAddress={tba as string}
                tokens={data}
                />
            </div>
        </div>
    );
};

export default TokenAsset;
