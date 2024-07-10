import HomeAsset from "@/assets/HomeAsset";

export interface NavUtilType {
  name: string;
  url: string;
  param: string;
  icon: any;
}

export const NavUtil: NavUtilType[] = [
  {
    name: "OverView",
    url: "/?home=true",
    param: "home",
    icon: HomeAsset().overview(),
  },
  {
    name: "Create Account",
    url: "/tba/starknet?tba=true&starknet=true",
    param: "tba",
    icon: HomeAsset().TBAs(),
  },
  {
    name: "Swap",
    url: "/swap?swap=true&",
    param: "swap",
    icon: HomeAsset().swap(),
  },
  {
    name: "Bridge",
    url: "/bridge?bridge=true&",
    param: "bridge",
    icon: HomeAsset().bridge(),
  },
  {
    name: "Community",
    url: "",
    param: "",
    icon: HomeAsset().recieve(),
  },
];
