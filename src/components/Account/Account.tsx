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
    <div className="flex flex-col gap-16 w-full min-h-[calc(100vh-20.8rem)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">
          Get started with Unix TBA Multichain Manger
        </h1>
        <p className="w-1/2 mx-auto text-xl text-white-1 font-semibold text-center">
          {" "}
          Manage all your multichain activities effortlessly in one place.
          Streamline your multichain management with a single, convenient
          solution.
        </p>
      </div>

      <div className="bg-hero rounded-2xl shadow-lg w-10/12 mx-auto border-hero border-2">
        <div className="text-center mt-6 mb-3">
          <h2 className="text-2xl font-bold">Token Bound Accounts</h2>
          <p>
            List of all Token Bound Accounts associated to the connected account
          </p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center bg-black-1 justify-between rounded-2xl border-button-1 border-2 px-2 py-1"
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
                  className="bg-button px-8 py-2 rounded-xl font-semibold hover:text-white-1 hover:bg-button-1"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
          {/* else */}
          {/* <h2 className="text-xl text-center italic text-yellow-500 my-5">
            No token bound account is associated to the connected starknet account
          </h2> */}
        </div>

        <div className="text-center m-2">
          <p className="text-center m-2 inline">Missing TBA?</p>
          <div className="inline-block">
            <TbaModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
