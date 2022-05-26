// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// This ERC-20 contract mints the specified amount of tokens to the contract creator.
contract MyToken is ERC20 {
  uint256 constant initialSupply = 1000 * (10**18);
  constructor() ERC20("MyToken", "MYTOK") {
    _mint(msg.sender, initialSupply);
  }
}