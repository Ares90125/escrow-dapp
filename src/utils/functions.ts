import { tokens } from "./constants";

export const truncateAddress = (walletAddress: string, len = 4) => {
  return walletAddress.slice(0, len) + "..." + walletAddress.slice(-len);
};

export const getTokenSymbol = (walletAddress: string) => {
  return tokens.find((token) => token.publickey == walletAddress)!.symbol;
};
export const getTokenLogo = (walletAddress: string) => {
  return tokens.find((token) => token.publickey == walletAddress)!.logo;
};

export const getTokenUri = (walletAddress: string) => {
  return tokens.find((token) => token.publickey == walletAddress)!.uri;
};
