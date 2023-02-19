export interface NetworkProps {
  setNetwork: (network: string) => void;
}

const NetworkChoose = ({ setNetwork }: NetworkProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Choose the network!</span>
      </label>
      <select
        onChange={(e) => setNetwork(e.target.value.toString())}
        className="select select-bordered"
      >
        <option value={"ethereum"}>
          Ethereum
        </option>
        <option value={"ropsten"}>Ropsten</option>
        <option value={"goerli"}>Goerli</option>
        <option value={"maticmumbai"}>Matic Mumbai</option>
        <option value={"matic"}>Matic Mainnet</option>
        <option value={"arbitrum"}>Arbitrum</option>
        <option value={"arbitrumgoerli"}>Arbitrum Goerli</option>
      </select>
    </div>
  );
};

export default NetworkChoose;
