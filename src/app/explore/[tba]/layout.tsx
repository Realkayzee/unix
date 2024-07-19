'use client'
import Button2 from "@/app/helpers/Button2";
import useGetOwnerNFT from "@/hooks/useGetOwnerNFT";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const ExploreLayout = ({
    children
}: Readonly<{
    children: ReactNode
}>) => {
    const search = useSearchParams()
    const {tba} = useParams()

    const PadNav = [
        {
            name: "Tokens ",
            url: `/explore/${tba}/token?token=true`,
            param: "token",
        },
        {
            name: "NFTs",
            url: `/explore/${tba}/nft?nft=true`,
            param: "nft",
        },
    ];

    const { data, isLoading } = useGetOwnerNFT({
        boundAccount: tba as string,
    })

    return (
        <div className="flex flex-col gap-10 px-4">
            <div className="flex flex-col gap-3">
                {isLoading ? (
                    <div className="border-button-1 rounded-lg border-4 w-96 h-96">
                        <div className="w-full h-full flex flex-col gap-2 justify-center bg-hero animate-pulse">
                            <p className="font-bold bg-gray-600 text-4xl h-3 w-16 rounded-xl mx-auto animate-pulse"></p>
                            <p className="font-bold bg-gray-600 text-2xl h-3 w-24 rounded-xl mx-auto animate-pulse"></p>
                        </div>
                    </div>
                ): (
                    <div className="flex gap-5">
                        {(data?.imageUrl === null || data?.imageUrl === undefined) ? (
                            <div className="border-button-1 rounded-lg border-4 w-96 h-96">
                                <div className="w-full h-full flex flex-col gap-2 justify-center bg-hero">
                                    <p className="text-center font-bold text-gray-600 text-4xl">{data?.contractSymbol}</p>
                                    <p className="text-center font-bold text-gray-600 text-2xl">{data?.tokenId}</p>
                                </div>
                            </div>
                        ): (
                            <Image
                            src={data?.imageUrl}
                            alt="tba"
                            width={384}
                            height={384}
                            />
                        )}
                    </div>
                )}
                <Link
                href={`https://starkscan.co/contract/${tba}`}
                className="text-xl font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                >
                    {tba}
                </Link>
            </div>
            <div className="">
                <div className="w-96 bg-button-1 rounded-2xl p-1 flex gap-1">
                    {PadNav.map((item, index) => (
                        <Link
                            href={item.url}
                            key={index}
                            className={`w-full text-center py-2 text-lg outline-none border-0 rounded-2xl hover:bg-hero hover:text-white ${search.get(item.param) == "true" && "text-white bg-hero"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="py-5">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ExploreLayout;