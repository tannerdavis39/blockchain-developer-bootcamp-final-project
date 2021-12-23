// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

    contract contract2 {

  
mapping(address => mapping(bytes32 => bool)) public nested;

function verifySong1(bytes32 SongID1) public view returns (bool) {

        address _addr;

        _addr = msg.sender;

        return nested[_addr][SongID1];
    }

    function addSong1(
        bytes32 SongID1) public payable { 
        
        bool _boo;
        _boo = true;
        address _addr;
        _addr = msg.sender;

     nested[_addr][SongID1] = _boo;
     
    }

    function remove(address _addr, bytes32 SongID1) public {
        delete nested[_addr][SongID1];
    }

    


    

    
}