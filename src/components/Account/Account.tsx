"use client";
import Button2 from "@/app/helpers/Button2";
import { useRouter } from "next/navigation";
import TbaModal from "../Modal/tba/TbaModal";
import toast from "react-hot-toast";

const Account = () => {
  const router = useRouter();

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = (address: any) => {
    copyTextToClipboard(`${address}`)
      .then(() => {
        toast.success("Copied!", {
          style: {
            color: "#fff",
            padding: "4px 15px",
            borderRadius: "8px",
            background: "#890162",
          },
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <div className="bg-hero rounded-3xl w-[1100px] mx-auto">
        <div className="p-8 flex flex-col gap-4">
          <div className="flex align-center justify-between text-xl">
            <p className="font-bold">Balance Overview:</p>
            <p className="font-mono">$900,000,000,000</p>
          </div>
          <div className="flex align-center justify-between text-xl">
            <p className="font-bold">NFT count:</p>
            <p className="font-mono">0</p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-bold mt-12 mb-3">
        Token Bound Accounts
      </h2>

      <div className="bg-hero rounded-3xl w-[1100px] mx-auto border-hero border-2">
        <div className="p-8 flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center bg-black-1 justify-between rounded-2xl border-button-1 border-2 p-2"
            >
              <p>
                <span className="mr-4">{index + 1}.</span>
                0x85f452bAeC34a3475464Ba7130081b587BbF0472
              </p>
              <div className="flex gap-4 align-center">
                <Button2
                  onClick={() =>
                    handleCopyClick(
                      "0x85f452bAeC34a3475464Ba7130081b587BbF0472"
                    )
                  }
                >
                  Copy
                </Button2>
                <button
                  onClick={() =>
                    router.push(
                      `/explore/${"0x85f452bAeC34a3475464Ba7130081b587BbF0472"}/token?token=true`
                    )
                  }
                  className="bg-button px-8 py-2 rounded-xl font-semibold"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center m-2">
          <p className="text-center m-2 inline">Missing TBA?</p>
          <div className="inline-block">
            <TbaModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
