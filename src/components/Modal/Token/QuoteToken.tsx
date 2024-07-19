import ModalFrame from "@/app/helpers/ModalFrame"
import { useState } from "react"
import { TokenAnimation } from "./TokenAnimation"
import { useQuery } from "@tanstack/react-query"
import { avnuApi } from "@/services/avnu"
import Image from "next/image"
import { SubmitHandler, useForm } from "react-hook-form"
import { Error } from "@/components/ErrorHandler/Error"
import { api } from "@/services/Blast"
import useStore from "@/hooks/useStore"

type SearchType = {
    param: string
}

const QuoteToken = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const [searchData, setSearchData] = useState<any>(null)
    const quoteToken = useStore(state => state.quoteToken)
    const setQuoteToken = useStore(state => state.setQuoteToken)

    const { data, isLoading } = useQuery({
        queryKey: ['supported tokens'],
        queryFn: async () => await avnuApi.getTokens()
    })

    const handleOpen = () => {
        setOpen(true)
        setSearchData(null)
        setValue('param', '')
    }

    const handleTokenSelect = (token: string) => {
        setQuoteToken(token)
        setOpen(false)
        setSearchData(null)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<SearchType>()

    const onSearch: SubmitHandler<SearchType> = async (data) => {
        const tokenDetails = await api.getTokenDetails(data.param)
        setSearchData(tokenDetails)
    }

    return (
        <>
            <button
            onClick={handleOpen}
            className="w-full rounded-xl bg-button-1 text-white font-semibold outline-none px-2 py-[6px] hover:text-white-1 basis-32"
            type="button"
            >
                {quoteToken ? quoteToken.symbol : 'Select Token'}
            </button>
            {/* <Button2 onClick={() => setModalOpen(true)}>Token Select</Button2> */}
            <ModalFrame open={isOpen} setOpen={setOpen} className="bg-[#03031d]">
                {/* Header */}
                <div className="relative flex justify-center">
                    <h1 className="font-bold text-2xl mb-4">Select a token</h1>
                </div>
                <div className="flex flex-col gap-3">
                    {/* Search */}
                    <input
                    {...register("param", {
                        pattern: /^(0x){1}[0-9a-fA-F]{60,66}$/
                    })}
                    type="text"
                    className="rounded-3xl pl-6 pr-12 py-4 w-full text-xl placeholder:text-gray-500 bg-input outline-none border-0 focus:shadow-none focus:ring-0 focus:outline focus:outline-1 focus:outline-button-1"
                    placeholder="Search by Address"
                    onBlur={handleSubmit(onSearch)}
                    />
                    <Error
                    error={errors.param?.type}
                    patternMessage="A valid address is required"
                    />
                    {/* Balance */}
                    <div className={`flex flex-col gap-1 relative min-h-40`}>
                        {/* header */}
                        <h2 className="bg-input p-2 rounded-tr-3xl rounded-tl-3xl font-bold text-center">
                            Assets
                        </h2>
                        {/* body */}

                        {!searchData && (
                            <div className="bg-input rounded-b-3xl h-[330px] p-1 flex flex-col gap-4 overflow-y-auto token-scroll">
                                {isLoading ? (
                                    <TokenAnimation />
                                ): (
                                    <div className="flex flex-col divide-y-2 divide-input">
                                        {data?.content.map((token: any, index: any) => (
                                            <div
                                            className="flex justify-between p-3 rounded-xl cursor-pointer hover:bg-button-1"
                                            key={index}
                                            onClick={() => handleTokenSelect(token)}
                                            >
                                                <div className="flex gap-2">
                                                    <Image
                                                    src={token.logoUri}
                                                    alt={token.symbol}
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full"
                                                    />
                                                    <p className="my-auto">
                                                        {token.symbol}
                                                    </p>
                                                </div>
                                                <p>
                                                    {token.address.slice(0, 4) + "..." + token.address.slice(-4)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Search Results */}
                        <div className="absolute top-12 inset-x-0 bg-hero rounded-b-3xl z-[100]">
                            {searchData && (
                                <div
                                className="bg-input rounded-b-3xl h-full w-full p-4 flex justify-between cursor-pointer hover:bg-button-1"
                                onClick={() => handleTokenSelect(searchData)}
                                >
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 bg-button rounded-full"></div>
                                        <p className="my-auto">
                                            {searchData?.contractSymbol}
                                        </p>
                                    </div>
                                    <p>
                                        {searchData.contractAddress.slice(0, 4) + "..." + searchData.contractAddress.slice(-4)}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ModalFrame>
        </>
    )
}

export default QuoteToken