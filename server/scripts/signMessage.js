const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./generate");

const signMessage = (message) => {
  const hash = hashMessage(message);
  return secp.secp256k1.sign();
};

module.exports = signMessage;
