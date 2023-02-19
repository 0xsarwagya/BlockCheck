export interface BalanceProps {
  balance: string;
  currency: string;
}

const Balance = ({ balance, currency }: BalanceProps) => {
  return (
    <div className="flex justify-center mt-5 ">
      <button
        className={`btn text-xl border-0 w-auto bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-white focus:text-white`}
      >
        {" "}
        <p className={`text-primary mr-2`}>Balance : </p>
        {balance} <p className="ml-1.5">{currency}</p>
      </button>
    </div>
  );
};

export default Balance;
