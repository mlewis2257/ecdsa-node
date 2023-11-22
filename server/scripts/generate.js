const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const privateKey = secp.secp256k1.utils.randomPrivateKey();
const publicKey = secp.secp256k1.getPublicKey(privateKey);

const hashMessage = (message) => {
  message = privateKey.toString();
  const messageBytes = utf8ToBytes(message);
  const hash = toHex(keccak256(messageBytes));
  return hash;
};

console.log("private key:", hashMessage());

module.exports = {
  hashMessage,
};
