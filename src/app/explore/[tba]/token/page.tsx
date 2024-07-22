'use client'
import Tokens from "@/components/Tokens/Tokens";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/Blast";

const TokenAsset = () => {
    const { tba } = useParams()

    console.log(tba, 'tba')

    const { data, isLoading } = useQuery({
        queryKey: ['getBalance'],
        queryFn: async () =>
            await api.getWalletTokenBalances(tba as string)
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
