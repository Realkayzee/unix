"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button2 from "../helpers/Button2";

const explore = () => {
  const search = useSearchParams();
  return (
    <>
      <div>
        <h2 className="text-2xl">TBA address: 0x67364f35885a</h2>
        <div className="mt-6 cursor-pointer border-button-1 rounded-lg border-2 p-4 w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] h-[300px]"></div>
        <div className="mt-6 w-96 bg-button-1 rounded-2xl p-1 flex gap-1">
          <a
            href={""}
            className={`w-full text-center py-2 text-lg outline-none border-0 rounded-2xl hover:bg-hero hover:text-white`}
          >
            Token
          </a>
          <a
            href={""}
            className={`w-full text-center py-2 text-lg outline-none border-0 rounded-2xl hover:bg-hero hover:text-white`}
          >
            NFTs
          </a>
        </div>

        <div className="py-8 flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="flex items-center bg-black-1 justify-between rounded-2xl border-button border-2 p-4">
              <p>
                <span className="mr-4">{index}</span>
                0x85f452bAeC34a3475464Ba7130081b587BbF0472
              </p>
              <div className="flex gap-4 align-center">
                <Button2>Copy</Button2>
                <button className="bg-button px-8 py-4 rounded-xl font-semibold">
                  Send
                </button>
                <button className="bg-button px-8 py-4 rounded-xl font-semibold">
                  Bridge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default explore;
