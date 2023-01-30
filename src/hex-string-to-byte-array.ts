export const hexStringToByteArray = (hexString: string | number[]) => {
  if (Array.isArray(hexString)) {
    return hexString;
  }
  return Array.from({length: hexString.length / 2}).map((_, i) =>
    parseInt(hexString.substring(i * 2, (i + 1) * 2), 16),
  );
};
