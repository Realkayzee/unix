'use client'
import { useRouter } from "next/navigation";

const NftAsset = () => {
    const router = useRouter();
    return (
        <div className="bg-hero rounded-xl py-10 px-5">
            <div className="text-center mt-6 mb-3">
                <h2 className="text-2xl font-bold">NFTs available</h2>
                <p>
                    List of all NFTs associated to the connected account
                </p>
            </div>
            <h2 className="text-xl text-center italic text-yellow-500 my-5">
                No tokens available in this account
            </h2>
        </div>
    );
}

export default NftAsset;