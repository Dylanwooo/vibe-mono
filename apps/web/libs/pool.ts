import { ethers } from "ethers";
import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { getProvider } from "./provider";
import { computePoolAddress } from "@uniswap/v3-sdk";
import { Token } from "@uniswap/sdk-core";

interface PoolInfo {
  token0: string;
  token1: string;
  fee: number;
  tickSpacing: number;
  sqrtPriceX96: ethers.BigNumber;
  liquidity: ethers.BigNumber;
  tick: number;
}
const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";

export const USDC_TOKEN = new Token(
  1,
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  6,
  "USDC",
  "USD//C"
);

export const DAI_TOKEN = new Token(
  1,
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  18,
  "DAI",
  "Dai Stablecoin"
);

const CurrentConfig = {
  rpc: {
    local: "http://localhost:8545",
    mainnet: "",
  },
  wallet: {
    address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    privateKey:
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  },
  tokens: {
    token0: USDC_TOKEN,
    token0Amount: 0.0015,
    token1: DAI_TOKEN,
    token1Amount: 0.0015,
    token0AmountToAdd: 0.0015,
    token1AmountToAdd: 0,
  },
};

export async function getPoolInfo(): Promise<PoolInfo> {
  const provider = getProvider();
  if (!provider) {
    throw new Error("No provider");
  }

  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: CurrentConfig.tokens.token0,
    tokenB: CurrentConfig.tokens.token1,
    fee: 500,
  });

  const poolContract = new ethers.Contract(
    currentPoolAddress,
    IUniswapV3PoolABI.abi,
    provider
  );

  const [token0, token1, fee, tickSpacing, liquidity, slot0] =
    await Promise.all([
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
      poolContract.tickSpacing(),
      poolContract.liquidity(),
      poolContract.slot0(),
    ]);

  return {
    token0,
    token1,
    fee,
    tickSpacing,
    liquidity,
    sqrtPriceX96: slot0[0],
    tick: slot0[1],
  };
}
