import HomeAsset from "@/assets/HomeAsset"

export interface NavUtilType {
  name: string;
  url: string;
  icon: any;
}

export const NavUtil: NavUtilType[] = [
  {
    name: "OverView",
    url: "/?home=true",
    icon: HomeAsset().overview()
  },
  {
    name: "Create TBAs",
    url:"/TBA?TBA=true&create=true",
    icon:HomeAsset().TBAs()
  },
  {
    name: "Swap",
    url: "/swap?swap=true&create=true",
    icon: HomeAsset().swap()
  },
  {
    name: "Bridge",
    url: "",
    icon: HomeAsset().bridge()
  },
  {
    name: "Send",
    url: "",
    icon: HomeAsset().send()
  },
  {
    name: "Receive",
    url: "",
    icon: HomeAsset().recieve()
  },
];