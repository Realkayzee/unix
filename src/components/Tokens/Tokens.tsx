import Button2 from "@/app/helpers/Button2";
import ModalFrame from "@/app/helpers/ModalFrame";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { Error } from "../ErrorHandler/Error";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTokenBound } from "@/hooks/useTokenBound";
import Loader from "../utils/Loader";
import { useRouter } from "next/navigation";
import useStore from "@/hooks/useStore";

interface SendType {
    recipient: string,
    amount: number
}

const Tokens = ({
    tokenBoundAddress,
    tokens
}: {
    tokenBoundAddress: string
    tokens: any[]
}) => {
    const route = useRouter()
    const [isOpen, setOpen] = useState<boolean>(false)
    const [asset, setAsset] = useState<any>()
    const [isloading, setisLoading] = useState<boolean>(false)
    const { tokenbound } = useTokenBound()
    const setBaseToken = useStore(state => state.setBaseToken)

    const handleSend = (tokenAsset: string) => {
        setOpen(true)
        setAsset(tokenAsset)
    }

    const handleSwapRoute = (token: any) => {
        route.push(`/swap?tba=${tokenBoundAddress}`)
        setBaseToken(token)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SendType>()

    const onSubmit: SubmitHandler<SendType> = async (data) => {
        setisLoading(true)
        setOpen(false)
        try {
            await tokenbound.transferERC20({
                tbaAddress: tokenBoundAddress,
                contractAddress: asset?.contractAddress,
                recipient: data.recipient,
                amount: `${(data.amount) * 10 ** Number(asset?.contractDecimals)}`,
            })
            setisLoading(false)

            toast.success("Token transfered successfully", {
                style: {
                    color: "#fff",
                    padding: "4px 15px",
                    borderRadius: "8px",
                    background: "#890162",
                    margin: "auto"
                },
            });
        } catch(err: any) {
            setisLoading(false)
            console.error(err)
            toast.error(`${err?.message}`, {
                style: {
                    color: "#fff",
                    padding: "4px 15px",
                    borderRadius: "8px",
                    background: "#890162",
                    margin: "auto"
                },
            })
        }
    }

    return (
        <>
            <Loader loading={isloading}/>
            {tokens?.length === 0 ? (
                <h2 className="text-xl text-center italic text-yellow-500 my-5">
                    No tokens available in this account
                </h2>
            ): (
                <>
                    <div className="flex justify-between pl-10 font-bold">
                        <h2 className="w-44">Assets</h2>
                        <h2>Balances</h2>
                        <h2 className="invisible w-[234px]">buttons.</h2>
                    </div>
                    {tokens?.map((token, index) => (
                        <div
                            key={index}
                            className="flex item-center bg-black-1 justify-between rounded-2xl border-button-1 border-2 px-2 py-1"
                        >
                            <p className="my-auto font-semibold w-52">
                                <span className="mr-4">{index + 1}.</span>
                                {`${token.contractSymbol}`}
                            </p>
                            <p className="font-semibold my-auto">
                                {`${(Number(token.balance)/10**Number(token.contractDecimals)).toFixed(5)}`}
                            </p>
                            <div className="flex gap-4 align-center">
                                <Button2
                                className="cursor-pointer"
                                onClick={() => handleSend(token)}
                                >
                                    Send
                                </Button2>
                                <button
                                className="bg-button px-8 py-2 rounded-xl font-semibold hover:text-white-1 hover:bg-button-1 cursor-pointer"
                                onClick={() => handleSwapRoute(token)}
                                >
                                    Swap
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}

            {/* Send Modal */}
            <ModalFrame open={isOpen} setOpen={setOpen} className="bg-[#03031d] max-w-xl">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl text-center font-bold">Send token</h1>
                        <Link
                        href={`https://starkscan.co/contract/${asset?.contractAddress}`}
                        className="text-sm italic font-bold hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            {asset?.contractAddress}
                        </Link>
                    </div>
                    <form
                    className="bg-input rounded-2xl p-4 flex-col gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* row 1 */}
                        <div className="flex flex-col gap-3">
                            <label className="text-lg font-semibold">
                                Send To
                            </label>
                            <input
                            {...register("recipient", {
                                required: true,
                                pattern: /^(0x){1}[0-9a-fA-F]{60,66}$/
                            })}
                            className="border-0 outline-none bg-hero w-full placeholder:text-gray-500 px-5 py-4 rounded-3xl text-lg"
                            placeholder="Enter public address (0x) or ENS name"
                            autoComplete="off"
                            />
                            <Error
                            error={errors.recipient?.type}
                            patternMessage="A valid address is required"
                            />
                        </div>
                        {/* row 2 */}
                        <div className="flex flex-col gap-3">
                            <label className="text-lg font-semibold">
                                Amount
                            </label>
                            <div className="bg-hero rounded-3xl flex">
                                <button
                                className="font-semibold px-5 py-4 bg-[#3b012aea] rounded-s-3xl max-w-1/2"
                                type="button"
                                onClick={() => setOpen(true)}
                                >
                                    {asset?.contractSymbol}
                                </button>
                                <input
                                {...register("amount", {
                                    required: true,
                                    pattern: /^\d+(\.\d+)?$/
                                })}
                                className="border-0 outline-none focus:shadow-none focus:ring-0 bg-hero w-full placeholder:text-gray-500 py-4 px-5 rounded-e-3xl text-lg text-right"
                                placeholder="0.00"
                                autoComplete="off"
                                type="text"
                                />
                            </div>
                            <Error
                            error={errors.amount?.type}
                            patternMessage="A valid amount is required"
                            />
                        </div>
                        <button className="w-full mt-10 rounded-xl bg-button-1 text-white font-semibold py-4">
                            Send
                        </button>
                    </form>
                </div>
            </ModalFrame>
        </>
    );
}

export default Tokens;