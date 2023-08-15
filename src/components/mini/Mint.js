import { useState } from "react";
import hero from "../../assets/hero2.svg";
import mintnow from "../../assets/mintnow.svg";
import MintModal from "./MintModal";
import contractABI from "../../abi/brian.json";
import { useContractWrite, useBalance } from "wagmi";
import { parseEther } from "viem";
import { useNetwork, useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Mint() {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address,
  });

  const [mintQty, setMintQty] = useState(1);
  // Get the mint price as a big number hardcoded to 0.069 ETH and multiply by the quantity
  const mintPrice = parseEther("0.069") * BigInt(mintQty);

  const notEnoughETH = balance?.value < mintPrice;

  // todo: handle tx failure, other states
  const { isSuccess, write } = useContractWrite({
    address: "0x3916a87964d5fa3fde76f07f697910d24f7046fc",
    abi: contractABI,
    functionName: "mint",
  });

  // Function to mint a new token
  const mintToken = async () => {
    try {
      write({
        args: [mintQty],
        value: mintPrice,
      });
    } catch (error) {
      console.log(error);
      //See if it is a revert due to insufficent ether and alert the user:
      if (error.message.includes("missing revert data")) {
        alert("Insufficient Ether to mint this token");
      }
    }
  };

  return (
    <div className="lg:pl-60 mint bg-grdeen-900 w-full lg:w-2/4 flex flex-col items-center  ">
      {isSuccess && <MintModal />}

      <div className="rounded-full bg-[#0052FF] flex justify-center items-center h-72 w-72">
        <img src={hero} alt="" className="w-60 lg:w-52" />
      </div>

      <h3 className="text-xl lg:text-2xl self-center justify-self-center align mt-5 text-center">
        3333 Baldies
      </h3>
      <h3 className="text-xl lg:text-2xl self-center justify-self-center align mt-5 mb-5 text-center">
        Mint price : 0.069 ETH
      </h3>

      <div className="mintsection flex flex-col justify-center items-center mb-10">
        {chain?.id === 8453 ? (
          <button
            onClick={mintToken}
            className={`button ${notEnoughETH ? "mb-8" : ""}`}
            disabled={chain?.id !== 8453 || notEnoughETH}
          >
            {notEnoughETH ? (
              "Not enough ETH"
            ) : (
              <img src={mintnow} alt="" className="w-44 mb-5 lg:w-64 lg:mb-2" />
            )}
          </button>
        ) : (
          <div className="mb-8">
            <ConnectButton />
          </div>
        )}
        <input
          className=" w-[234px] h-[52px] rounded-lg ml-2 lg:h-[77px] lg:w-[343px] text-center lg:text-xl !m-0 p-0"
          type="text"
          placeholder="Enter Quantity"
          value={mintQty}
          onChange={(e) => setMintQty(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Mint;
