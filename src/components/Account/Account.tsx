"use client";
import Button2 from "@/app/helpers/Button2";
import { useRouter } from "next/navigation";
import TbaModal from "../Modal/tba/TbaModal";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/Blast";
import { useAccount } from "@starknet-react/core";
import useGenerateAccounts, { tbaType } from "@/hooks/useGenrateAccounts";
import AccountAnimation from "./AccountAnimation";
import DeployedAccount from "./DeployedAccount";

const Account = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['getNft'],
    queryFn: async () =>
      await api.getStarkWalletNFTs("0x05b27d17f55f4a0a613c2d90b4df96a45a05ff4ec39a2f70ba656652f146f16a" as string)
  })

  const {data:accountList, isLoading:accountLoading} = useGenerateAccounts({
    nfts: data?.nfts,
    enabled: (data !== undefined)
  })

  const deployedAccounts = accountList?.filter((account: any) => account?.isDeployed === true)


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
          {accountLoading ? (
            <AccountAnimation />
          ): (
            <DeployedAccount
            deployedAccounts={deployedAccounts}
            />
          )}
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
