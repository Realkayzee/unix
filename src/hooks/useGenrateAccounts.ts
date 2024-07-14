import { tokenBoundOptions } from "@/config";
import { useAccount } from "@starknet-react/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BigNumberish } from "starknet";
import { TokenboundClient } from "starknet-tokenbound-sdk";

interface params {
  nfts: any[];
  enabled?: boolean;
}

export interface tbaType {
  account: BigNumberish | undefined;
  isDeployed: boolean | undefined;
  accountClassHash: string | undefined;
}

const useGenerateAccounts = ({ nfts, enabled = true }: params) => {
  const { account } = useAccount();

  const tokenbound =
    account &&
    new TokenboundClient({
      account: account,
      ...tokenBoundOptions,
    });

  const getAccountList = async (
    nfts: any[],
    tokenbound: TokenboundClient | undefined
  ) => {
    try {
      let accountList = [];
      for (let i = 0; i < nfts.length; i++) {
        const account = await tokenbound?.getAccount({
          tokenContract: nfts[i].contractAddress,
          tokenId: nfts[i].tokenId,
        });

        const status = await tokenbound?.checkAccountDeployment({
          tokenContract: nfts[i].contractAddress,
          tokenId: nfts[i].tokenId,
        });

        const tbaAccountdata = {
          account: account,
          isDeployed: status?.deployed,
          accountClassHash: status?.classHash,
        };

        accountList.push(tbaAccountdata);
      }

      return accountList;
    } catch (err) {
      console.error(err);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getAccountList", nfts, tokenbound],
    queryFn: async () => await getAccountList(nfts, tokenbound),
    enabled: enabled,
  });

  return {
    data,
    isLoading,
  };
};

export default useGenerateAccounts;
