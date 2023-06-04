// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Tiket is ERC1155, ERC1155Supply, Ownable {
    uint256 public constant TICKET_ID = 1;
    uint256 public constant TOTAL_SUPPLY = 5000;

    constructor() ERC1155("https://bafkreihz2go5746phurip6hv2nafq73lfzvzgisox3egx37y4u2r2wzopu.ipfs.nftstorage.link") {
        _mint(msg.sender, TICKET_ID, TOTAL_SUPPLY, "");
        transferOwnership(msg.sender);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

}
