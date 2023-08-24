import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";

import React, { useRef } from "react";
import Hero from "./components/Hero";
import Hidden from "./components/Hidden";
import World from "./components/World";
import TermsModal from "./components/TermsModal";
import BaseChainModal from "./components/BaseChainModal";

import {
  RainbowKitProvider,
  ConnectButton,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  okxWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { base } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [base],
  [
    alchemyProvider({ apiKey: "tgLbjQVoz3UhQnSQ1o4BBLwFDNsTqL_0" }),
    publicProvider(),
  ]
);
const projectId = "d4572d71ba87eda8d21480e6850549d3";
// const appName = 'Based Brians';

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      okxWallet({
        projectId,
        chains,
      }),
    ],
  },
  {
    groupName: "Other Wallets",
    wallets: [
      rainbowWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      injectedWallet({ chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  const worldRef = useRef<HTMLDivElement>(null);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div style={{ position: "absolute", top: 24, right: 24 }}>
          <ConnectButton />
        </div>
        <Hero
          onMintNowClick={() => {
            worldRef?.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <World ref={worldRef} />
        <BaseChainModal />
        <TermsModal />
        <Hidden />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
