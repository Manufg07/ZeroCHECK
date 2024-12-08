const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VerificationModule", (m) => {
  // Define the contract deployment
  const verificationContract = m.contract("VerificationContract");

  // Return the deployed contract instance
  return { verificationContract };
});
