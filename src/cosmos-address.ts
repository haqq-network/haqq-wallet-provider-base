import converter from "bech32-converting";

export const cosmosAddress = (address: string, prefix: string) => {
  return converter(prefix).toBech32(address);
}
