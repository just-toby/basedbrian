import React, { useEffect,useState } from 'react';
import Hero from "./components/Hero";
import Hidden from "./components/Hidden";
import World from "./components/World";
import TermsModal from './components/TermsModal';
import BaseChainModal from './components/BaseChainModal';
import {ethers } from 'ethers';

import './App.css'


function App() {
  const [getProvider, setProvider] = useState(null);
  const [getSigner, setSigner] = useState(null);
  const [isBased, setIsBased] = useState(false);
  

  useEffect(() => {
    document.title = "Based Brian";
  


    const initEthers = async () => {

      // Prompt user to connect their MetaMask account to your site
     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
     
     // If no account is connected, stop here
     if (accounts.length === 0) {
       console.log('Please connect your MetaMask account.');
       return;
     }

     // Get network id using window.ethereum
     const networkId = await window.ethereum.request({ method: 'net_version' });
     
const chainCheck = () => {
     if (networkId != 8453) {
       //alert("You aren't based if you aren't on the BASE network. Please switch to BASE network and try again.");
       setIsBased(false);
     } else {
       setIsBased(true);
     }

   }
   chainCheck()
     //Run the same logic every time the network changes
     window.ethereum.on('chainChanged', chainCheck);

     // Define a mapping from network ID to RPC URL
     const rpcUrls = {
       
       8453: 'https://mainnet.base.org'                       // Custom network
       // Add more networks if needed
     };

     // Get the correct RPC URL for the current network
     const rpcUrl = rpcUrls[networkId];

     const provider = new ethers.BrowserProvider(window.ethereum)
     const signer = await provider.getSigner();
     
     setProvider(provider);
     setSigner(signer);
   };

    if (window.ethereum) {
      initEthers();
    }

  }, []);
  return (
    <div>
      <Hero/>
      <World passProvider={getProvider} passSigner={getSigner} passBased={isBased}/>
      <BaseChainModal isOpen={!isBased}/>
      <TermsModal/>
<Hidden/> 



    </div>
  )
}

export default App