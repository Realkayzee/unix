'use client'
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const ExploreTemplate = ({
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

    return (
        <div className="flex flex-col gap-10 px-4">
            <div className="flex flex-col gap-3">
                <div className="cursor-pointer border-button-1 rounded-lg border-2 p-4 w-96 h-96"></div>
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

export default ExploreTemplate;