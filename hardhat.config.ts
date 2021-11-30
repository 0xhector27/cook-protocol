import * as dotenv from "dotenv";

import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const BLOCK_NUM = parseInt(process.env.FORK_BLOCK_NUM || "");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    hardhat: {
      accounts: {
        mnemonic: "clutch captain shoe salt awake harvest setup primary inmate ugly among become",
      },
      forking: {
        url: process.env.MAINNET_URL || "",
        blockNumber: BLOCK_NUM
      }
    }
  },
  solidity: "0.6.12",
};

export default config;
