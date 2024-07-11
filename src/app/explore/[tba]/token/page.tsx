'use client'
import Button2 from "@/app/helpers/Button2";
import toast from "react-hot-toast";

const TokenAsset = () => {
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
        <div className="bg-hero rounded-2xl py-10 px-5 flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
            <div
            key={index}
            className="flex items-center bg-black-1 justify-between rounded-2xl border-button-1 border-2 px-2 py-1"
            >
            <p className="font-mono">
                <span className="mr-4">{index + 1}.</span>
                0x85f452bAeC34a3475464Ba7130081b587BbF0472
            </p>
            <div className="flex gap-4 align-center">
                <Button2
                onClick={() =>
                    handleCopyClick("0x85f452bAeC34a3475464Ba7130081b587BbF0472")
                }
                >
                Copy
                </Button2>
                <button className="bg-button px-8 py-2 rounded-xl font-semibold">
                Send
                </button>
                <button className="bg-button px-8 py-2 rounded-xl font-semibold">
                Bridge
                </button>
            </div>
            </div>
        ))}
        </div>
    );
};

export default TokenAsset;
