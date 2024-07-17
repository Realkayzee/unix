import { useQuery } from "@tanstack/react-query";
import { BigNumberish, num } from "starknet";
import { TokenboundClient } from "starknet-tokenbound-sdk";
import { useTokenBound } from "./useTokenBound";

interface params {
  nfts: any[];
  enabled?: boolean;
}

export interface tbaType {
  account: string;
  isDeployed: boolean | undefined;
  accountClassHash: string | undefined;
}

const useGenerateAccounts = ({ nfts, enabled = false }: params) => {
  const { tokenbound } = useTokenBound()

  const getAccountList = async (
    nfts: any[],
    tokenbound: TokenboundClient
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
          account: account ? num.toHex(account) : "",
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
