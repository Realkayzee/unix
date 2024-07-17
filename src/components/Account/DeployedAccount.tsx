import Button2 from "@/app/helpers/Button2";
import { tbaType } from "@/hooks/useGenrateAccounts";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeployedAccount = ({
    deployedAccounts
}: {
    deployedAccounts: string[] | undefined
}) => {
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
            {deployedAccounts?.length === 0 ? (
                <h2 className="text-xl text-center italic text-yellow-500 my-5">
                    No token bound account is associated to the connected account(s)
                </h2>
            ): (
                <>
                    {deployedAccounts?.map((deployedAccount, index) => (
                        <div
                            key={index}
                            className="flex item-center bg-black-1 justify-between rounded-2xl border-button-1 border-2 px-2 py-1"
                        >
                            <p className="my-auto font-semibold">
                                <span className="mr-4">{index + 1}.</span>
                                {`${deployedAccount.slice(0,18)}...${deployedAccount.slice(-18)}`}
                            </p>
                            <div className="flex gap-4 align-center">
                                <Button2
                                onClick={() =>
                                    handleCopyClick(deployedAccount)
                                }
                                >
                                    Copy
                                </Button2>
                                <button
                                    onClick={() =>
                                        router.push(
                                            `/explore/${deployedAccount}/token?token=true`
                                        )
                                    }
                                    className="bg-button px-8 py-2 rounded-xl font-semibold hover:text-white-1 hover:bg-button-1"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default DeployedAccount;