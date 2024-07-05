"use client";
import Button1 from "@/app/helpers/Button1";
import Button2 from "@/app/helpers/Button2";
import { useRouter } from "next/navigation";
import React from "react";

const Account = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white-1 rounded-3xl w-[1100px] mx-auto">
        <div className="p-8 flex flex-col gap-4">
          <div className="flex align-center justify-between text-xl text-hero">
            <p className="font-bold">Balance Overview:</p>
            <p className="font-mono">$900,000,000,000</p>
          </div>
          <div className="flex align-center justify-between text-xl text-hero">
            <p className="font-bold">NFT count:</p>
            <p className="font-mono">0</p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-bold mt-12 mb-3">
        Token Account Bound
      </h2>

      <div className="bg-white-1 rounded-3xl w-[1100px] mx-auto border-hero border-2 text-hero">
        <div className="p-8 flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex items-center justify-between rounded-2xl border-hero border-2 p-4">
              <p>
                <span className="mr-4">{index}</span>
                0x85f452bAeC34a3475464Ba7130081b587BbF0472
              </p>
              <div className="flex gap-4 align-center">
                <Button2>Copy</Button2>
                <Button1 onClick={() => router.push("/Explore")}>
                  Explore
                </Button1>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center m-2">
          Missing TBA?{" "}
          <a className="underline" href="/">
            add TBA
          </a>
        </p>
      </div>
    </>
  );
};

export default Account;
