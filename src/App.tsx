import { useEffect, useState } from "react";
import { ethers } from "ethers";
import NetworkChoose from "./components/NetworkChoose";
import AddressEnter from "./components/AddressEnter";
import Balance from "./components/Balance";

export const providerForType = new ethers.providers.JsonRpcProvider();

const App = () => {
  const [network, setNetwork] = useState("ethereum");
  const [provider, setProvider] =
    useState<typeof providerForType>(providerForType);
  const [address, setAddress] = useState<string>("");
  const [currency, setCurrency] = useState<string>("ETH");
  const [balance, setBalance] = useState<string>("");

  // Effect To setProvider
  useEffect(() => {
    if (network === "ethereum") {
      setCurrency("ETH");
      return setProvider(
        new ethers.providers.JsonRpcProvider("https://rpc.builder0x69.io")
      );
    } else if (network === "ropsten") {
      setCurrency("ETH");
      return setProvider(
        new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_ropsten")
      );
    } else if (network === "goerli") {
      setCurrency("ETH");
      return setProvider(
        new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli")
      );
    } else if (network === "maticmumbai") {
      setCurrency("MATIC");
      return setProvider(
        new ethers.providers.JsonRpcProvider(
          "https://rpc-mumbai.maticvigil.com"
        )
      );
    } else if (network === "matic") {
      setCurrency("MATIC");
      return setProvider(
        new ethers.providers.JsonRpcProvider(
          "https://polygon-bor.publicnode.com"
        )
      );
    } else if (network === "arbitrum") {
      setCurrency("ETH");
      return setProvider(
        new ethers.providers.JsonRpcProvider(
          "https://endpoints.omniatech.io/v1/arbitrum/one/public"
        )
      );
    } else if (network === "arbitrumgoerli") {
      setCurrency("ETH");
      return setProvider(
        new ethers.providers.JsonRpcProvider(
          "https://endpoints.omniatech.io/v1/arbitrum/goerli/public"
        )
      );
    } else return;
  }, [network]);

  useEffect(() => {
  }, [address])

  useEffect(() => {
    if (address) {
      provider
        .getBalance(address)
        .then((balance) => {
          setBalance(balance.toString());
        })
        .catch((e) => {});
    } else if (!address) {
      setBalance("");
    }
  }, [address]);

  return (
    <div>
      <center>
        {/* Title */}
        <h1 className="text-6xl text-primary mb-5">Block Check</h1>
        {/* Breadcrumbs */}
        <div className="flex justify-center items-center mb-5 text-accent">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>{network}</li>
              <li>{address}</li>
            </ul>
          </div>
        </div>
        {/* Network Choose */}
        <NetworkChoose setNetwork={setNetwork} />
        {/* Enter Address */}
        <AddressEnter setAddress={setAddress} />
      </center>
      {/* Main */}
      {balance ? <Balance balance={balance} currency={currency} /> : null}
    </div>
  );
};

export default App;
