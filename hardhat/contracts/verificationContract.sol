// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VerificationContract {
    // Event emitted when data is stored
    event DataStored(address indexed verifier, address indexed prover, bool status);

    // Struct to represent a verification
    struct Verification {
        address verifier;
        address prover;
        bool status;
    }

    // Array to store verifications
    Verification[] public verifications;

    // Function to store data
    function storeData(address _prover, bool _status) external {
        verifications.push(Verification({
            verifier: msg.sender,
            prover: _prover,
            status: _status
        }));

        emit DataStored(msg.sender, _prover, _status);
    }

    // Function to get the total number of verifications
    function getTotalVerifications() external view returns (uint256) {
        return verifications.length;
    }

    // Function to get a specific verification by index
    function getVerification(uint256 index) external view returns (address, address, bool) {
        require(index < verifications.length, "Invalid index");
        Verification memory verification = verifications[index];
        return (verification.verifier, verification.prover, verification.status);
    }
}
