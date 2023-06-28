import { ethers, providers } from "ethers";

function createBrowserExtensionProvider(): ethers.providers.Web3Provider | null {
  try {
    if (typeof window !== "undefined")
      //@ts-ignore
      return new ethers.providers.Web3Provider(window?.ethereum, "any");
  } catch (e) {
    console.log("No Wallet Extension Found");
    return null;
  }
}

export function getProvider(): providers.Provider | null {
  return createBrowserExtensionProvider();
}
