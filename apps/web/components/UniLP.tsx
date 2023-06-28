import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { Text } from "ui";
import { getProvider } from "../libs/provider";
import { getPoolInfo } from "../libs/pool";
import { ethers, BigNumber } from "ethers";

export interface PositionInfo {
  tickLower: number;
  tickUpper: number;
  liquidity: BigNumber;
  feeGrowthInside0LastX128: BigNumber;
  feeGrowthInside1LastX128: BigNumber;
  tokensOwed0: BigNumber;
  tokensOwed1: BigNumber;
}
const NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS =
  "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

export const NONFUNGIBLE_POSITION_MANAGER_ABI = [
  // Read-Only Functions
  "function balanceOf(address _owner) view returns (uint256)",
  "function tokenOfOwnerByIndex(address _owner, uint256 _index) view returns (uint256)",
  "function tokenURI(uint256 tokenId) view returns (string memory)",

  "function positions(uint256 tokenId) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)",
];

const provider = getProvider();

function UniLP() {
  const fetch = async () => {
    const poolInfo = await getPoolInfo();
    console.log("poolInfo", poolInfo);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <Box mx="auto" sx={{ width: 600 }}>
      <Card variant="outlined">
        <CardContent>
          <Text>Uniswap LP Position:</Text>
        </CardContent>
      </Card>
    </Box>
  );
}

export default React.memo(UniLP);
