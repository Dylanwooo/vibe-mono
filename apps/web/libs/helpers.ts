/**
 * Export constants and helper funcitons
 */

export const COIN_LOGO_PIFIX = `https://coinicons-api.vercel.app/api/icon/`;
export const TOKEN_LIST = `https://pools.sushi.com/api/v0?&chainIds=1&isWhitelisted=true&orderBy=liquidityUSD&orderDir=desc&protocols=SUSHISWAP_V3&tokenSymbols=,
`;
export function shortenAddress(addr: string = "") {
  return addr.slice(0, 6) + "..." + addr.slice(addr.length - 4);
}
