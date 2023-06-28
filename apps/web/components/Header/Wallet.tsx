import React, { useState, useEffect, useCallback, use } from "react";
import Button from "@mui/material/Button";
import { ethers } from "ethers";
import { shortenAddress } from "../../libs/helpers";
import { getProvider } from "../../libs/provider";

const provider = getProvider();

// This is the wallet connector component. It is used to get the user's wallet address, balance
function Wallet() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccountAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    if (errorMessage) alert(`Oops! ${errorMessage}`);
  }, [errorMessage]);

  useEffect(() => {
    if (userBalance) console.log("userBalance", userBalance);
  }, [userBalance]);

  const getuserBalance = async (address: string) => {
    const balance = await provider.getBalance(address, "latest");
  };

  const accountChangedHandler = useCallback(async (newAccount) => {
    const address = await newAccount.getAddress();
    setAccountAddress(address);
    const balance = await newAccount.getBalance();
    // @ts-ignore
    setUserBalance(ethers.utils.formatEther(balance));
    await getuserBalance(address);
  }, []);

  const connectHandler = useCallback(() => {
    // @ts-ignore
    if (window?.ethereum) {
      // @ts-ignore
      provider.send("eth_requestAccounts", []).then(async () => {
        // @ts-ignore
        await accountChangedHandler(provider?.getSigner());
      });
    } else {
      setErrorMessage("Please Install Metamask first");
    }
  }, []);
  return (
    <Button variant="outlined" onClick={connectHandler}>
      {account ? shortenAddress(account) : "Connect wallet"}
    </Button>
  );
}

export default Wallet;
