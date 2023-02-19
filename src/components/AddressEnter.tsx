import { ethers } from "ethers";
import { useRef, useState } from "react";

/**
 * Props for the AddressEnter component
 */
export interface AddressProps {
  /**
   * Function to be called when the user enters a valid address and submits the form
   * @param address The entered Ethereum address
   */
  setAddress: (address: string) => void;
}

/**
 * Component that renders an input field with a button to allow the user to enter an Ethereum address
 * @param setAddress Function to be called when the user enters a valid address and submits the form
 * @returns React component
 */
const AddressEnter = ({ setAddress }: AddressProps) => {
  const [error, setError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Handles form submission
   */
  const handleSubmit = () => {
    if (!inputRef.current?.value) {
      setError(true);
      setErrMsg("Please Enter An Address");
    } else if (!ethers.utils.isAddress(inputRef.current?.value)) {
      setError(true);
      setErrMsg("Please enter a valid address");
    } else {
      setAddress(inputRef.current?.value);
    }
  };

  return (
    <div className="form-control w-full max-w-xs mt-2.5">
      <label className="label">
        <span className="label-text">Enter the address</span>
      </label>
      <span className="flex flex-center">
        <input
          ref={inputRef}
          id="address"
          onChange={() => {
            setError(false);
            setAddress("");
          }}
          type="text"
          placeholder="0xaddress1234...."
          className={`input input-bordered w-full max-w-xs ${
            error ? `border-error` : null
          }`}
        />
        <button
          onClick={handleSubmit}
          className="btn btn-square bg-primary focus:bg-primary hover:bg-primary text-black ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
      {error ? (
        <label className="label">
          <span className="label-text text-error"> {errMsg} </span>
        </label>
      ) : null}
    </div>
  );
};

export default AddressEnter;