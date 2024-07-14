import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNftData = async (address: string) => {
  const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY; // Ensure this is set in your environment variables
  const url = `https://deep-index.moralis.io/api/v2.2/${address}/nft?chain=eth&format=decimal&media_items=false`;

  const response = await axios.get(url, {
    headers: {
      accept: "application/json",
      "X-API-Key": apiKey,
    },
  });

  return response.data;
};

const useNftData = (address: string) => {
  return useQuery({
    queryKey: ["nftData", address],
    queryFn: () => fetchNftData(address),
    enabled: !!address, // Ensure the query doesn't run if address is empty
  });
};

export default useNftData;
