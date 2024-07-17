"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/Blast";

const Starknet = () => {
  const router = useRouter();
  const { address } = useAccount();

  const { data, isLoading } = useQuery({
    queryKey: ["getNFTData"],
    queryFn: async () =>
      await api.getStarkWalletNFTs(
        "0x05b27d17f55f4a0a613c2d90b4df96a45a05ff4ec39a2f70ba656652f146f16a" as string
      ),
  });

  const flatNfts = data?.nfts?.flat();

  const [page, setPage] = useState(1);
  const pageSize = 9;
  const lastIndex = page * pageSize;
  const firstIndex = lastIndex - pageSize;
  const nfts = flatNfts?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(nfts?.length / pageSize);

  // const numbers = [...Array(totalPages + 1).keys()].slice(1);
  // const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // const changeCPage = (id: any) => {
  //   setPage(id);
  // };
  const prePage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page !== totalPages) {
      setPage(page + 1);
    }
  };

  const handleClick = (nft: any) => {
    const serializedData = encodeURIComponent(JSON.stringify(nft));
    router.push(`/tba/starknet/${nft.token_address}?data=${serializedData}`);
  };

  // console.log(data);
  return (
    <>
      <div className="flex flex-wrap gap-8">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-hero cursor-pointer border-button-1 rounded-lg border-2 p-4 w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] h-[300px]"
              ></div>
            ))
          : nfts?.map((nft: any, index: number) => {
              const url = nft.cachedImage?.url;
              return (
                <div
                  onClick={() => handleClick(nft)}
                  key={index}
                  className="cursor-pointer border-button-1 rounded-lg border-2 p-4 w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] h-[300px]"
                >
                  {url ? (
                    <img className="w-full h-full" src={url} alt={nft.name} />
                  ) : (
                    <div className="w-full h-full flex items-center  bg-button-1 justify-center">
                      <p className="text-6xl font-bold ">{nft.tokenId}</p>
                    </div>
                  )}
                </div>
              );
            })}
      </div>
      {/* Pagination */}
      <nav className="mt-20 flex justify-center">
        <ul className="flex items-center gap-10 text-sm">
          <li>
            <a
              href="#"
              onClick={prePage}
              className="flex items-center justify-center rounded-s-lg bg-button px-8 py-2 rounded-xl font-semibold"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={nextPage}
              className="flex items-center justify-center bg-button px-10 py-2 rounded-xl font-semibold"
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Starknet;
