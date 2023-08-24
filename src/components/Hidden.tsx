import React from 'react';
import Pics from './mini/Pics';

function Hidden() {
  return (
    <div
      className="bg-[#B1B5BE]/50 min-h-screen flex  flex-col lg:flex-row judstify-center items-center font-[Symtext]
justify-center lg:flex-wrap 
    "
    >
      <Pics />
      <Pics />
      <Pics />
      <Pics />
      <Pics />
      <Pics />
      <Pics />
      <Pics />
      <Pics />
      <Pics />

      <p
        className="text-base lg:text-xl self-center justify-self-center text-center align mt-10 lg:mt-20 josephine mx-6   font-semibold
       mb-2 w-auto lg:w-2/6 
       "
      >
        &copy; 2023 Based Brian. All rights reserved.
      </p>
    </div>
  );
}

export default Hidden;
