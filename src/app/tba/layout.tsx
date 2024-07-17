"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const TBALayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const search = useSearchParams();

  const PadNav = [
    {
      name: "NFTs on starknet",
      url: `/tba/starknet?tba=true&starknet=true`,
      param: "starknet",
    },
    {
      name: "NFTs on Base",
      url: `/tba/base?tba=true&base=true`,
      param: "base",
    },
  ];

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="text-xl tracking-wide	mb-10 flex flex-col gap-5">
        <p className="text-2xl text-center font-semibold">
          Create Token Bound Account from your available NFTs
        </p>
        <div className="w-96 bg-button-1 rounded-2xl p-1 flex gap-1">
          {PadNav.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className={`w-full text-center py-2 text-lg outline-none border-0 rounded-2xl hover:bg-hero hover:text-white ${
                search.get(item.param) == "true" && "text-white bg-hero"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[calc(100%-2rem)] mx-auto bg-hero rounded-xl p-5">
        {children}
      </div>
    </div>
  );
};

export default TBALayout;
