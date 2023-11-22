const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./generate");

const recoverPublicKey = async (message, signature, recoveryBit) => {
  let hash = hashMessage(message);
  return secp.secp256k1.recoverPublicKey(hash, signature, recoveryBit);
};

module.exports = recoverPublicKey;
