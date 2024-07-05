"use client";
import Button1 from "../helpers/Button1";
import Button2 from "../helpers/Button2";
import { useRouter } from "next/navigation";

const Explore = () => {
  const router = useRouter();
  return (
    <>
      <div className=" mx-6">
        <div className="flex flex-col gap-6 my-4">
          <h3 className="text-2xl">TBA Address: 0x67364f35885a</h3>
          <div className="cursor-pointer border-hero bg-white-1 rounded-lg border-2 p-4 w-[350px] h-[250px]">
            {" "}
            NFT image
          </div>
        </div>

        <p className="text-xl cursor-pointer mb-4">
          <a className="hover:underline" href="/">
            Tokens
          </a>{" "}
          |{" "}
          <a className="hover:underline" href="/">
            NFTs
          </a>
        </p>
        <div className="bg-white-1 rounded-3xl w-[1100px] border-hero border-2 text-hero">
          <div className="p-8 flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex items-center justify-between rounded-2xl border-hero border-2 p-4">
                <p>
                  <span className="mr-4">{index}</span>
                  0x85f452bAeC34a3475464Ba7130081b587BbF0472
                </p>
                <div className="flex gap-4 align-center">
                  <Button2>Send</Button2>
                  <Button1 onClick={() => router.push(`/swap`)}>Swap</Button1>
                  <Button1 onClick={() => router.push(`/bridge`)}>
                    Bridge
                  </Button1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
