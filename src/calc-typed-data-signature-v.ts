export function calcTypedDataSignatureV(signature: string) {
  const offset = 27;
  const v = (parseInt(signature.slice(-2), 16) + offset).toString(16);
  signature = signature.slice(0, -2) + v;
}
