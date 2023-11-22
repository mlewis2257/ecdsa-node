const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

const getAddress = (publicKey) => {
  let sliceFirstByte = publicKey.slice(1, publicKey.length);
  let hash = keccak256(sliceFirstByte);
  return hash.slice(-20);
};

module.exports = getAddress;
