import React from "react";
import Mint from "./mini/Mint";

function World({}, ref) {
  //Braineum - brians are so smart they have their own currency.
  //braineum is the currency of the future.
  //brians are very based.
  //i took a brian home and he was based.
  //i introduced him to your mom and she fell in love with him.
  //i told her he was based and she said "i know".
  //i said "no, he's based".
  //she said "i know, he's based".
  return (
    <div
      ref={ref}
      className="bg-[#B1B5BE]/50 min-h-screen flex flex-col judstify-center items-center fonst-[Symtext] "
    >
      <h3 className="text-xl lg:text-4xl self-center justify-self-center align mt-20 lg:mb-20">
        A NEW World OF BASED BRIANS!
      </h3>

      <div className="twosides flex flex-col lg:flex-row items-center">
        <p
          className="text-base lg:text-2xl self-center justify-self-center align mt-10 lg:mt-20 josephine mx-6   font-semibold
       mb-20 w-auto lg:w-2/6 lg:ml-20
       "
        >
          Based Brians are 3,333 uniquely generated Brians. No two are exactly
          alike, and each one of them can be officially owned by a single person
          on the Base blockchain.
          <br></br>
          <br></br>
          Created as an homage to Brian, Based Brians are the first Crypto Punk
          derivative minted on Coinbase’s breakthrough blockchain.
        </p>

        <Mint />
      </div>

      <p
        className="text-base lg:text-2xl self-center justify-self-center text-center align mt-10 lg:mt-20 josephine mx-6   font-semibold
       mb-5 lg:mb-20 w-auto lg:w-2/6 
       "
      >
        Each mint costs 0.069 ETH, and a portion of the funds raised will be
        donated to Brian’s charitable foundation, The Giving Pledge.
      </p>
      <p
        className="text-base lg:text-6xl self-center justify-self-center text-center align josephine mx-6   font-bold
       mb-2D0 w-auto lg:w-3/6 
       "
      >
        COMING SOON
      </p>
      <p
        className="text-base lg:text-2xl self-center justify-self-center text-center align mt-1D0 mlg:mt-20 josephine mx-6   font-normal
       mb-20 w-auto lg:w-3/6 
       "
      >
        Every Holder of a Based Brian NFT will be eligible to claim a limited
        run of Based Brian Bald caps in the future.
        <br />
        Embrace the Base
        <br />
        Embrace the Bald
        <br />
        Embrace the BRIAN
        <br />
      </p>
    </div>
  );
}

export default React.forwardRef(World);
