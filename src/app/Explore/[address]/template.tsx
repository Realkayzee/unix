"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const PadNav = [
  {
    name: "Token ",
    url: "/explore/token?explore=true&token=true",
    param: "token",
  },
  {
    name: "NFTs",
    url: "/explore/nfts?explore=true&nfts=true",
    param: "nfts",
  },
];

const exploreTemplate = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const search = useSearchParams();
  return (
    <>
      <div className="ml-2">
        <h2 className="text-2xl">
          TBA address: <span className="font-mono">0x67364f35885a</span>
        </h2>
        <div className="mt-6 cursor-pointer border-button-1 rounded-lg border-2 p-4 w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] h-[300px]"></div>
        <div className="w-96 bg-button-1 rounded-2xl p-1 flex gap-1 mt-4">
          {PadNav.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className={`w-full text-center py-2 text-lg outline-none border-0 rounded-2xl hover:bg-hero hover:text-white focus:bg-hero focus:text-white ${
                search.get(item.param) == "true" && "text-white bg-hero"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="py-8 flex flex-col gap-4">{children}</div>
      </div>
    </>
  );
};

export default exploreTemplate;
