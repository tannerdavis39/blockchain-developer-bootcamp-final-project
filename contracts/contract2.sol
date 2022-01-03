// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title A Songbook for copyright
/// @author Tanner Davis
/// @notice You can use this contract to log and verify the presence of your song.
    contract contract2 {

    /// @notice gets the status of song via .call
    /// @return boolean that represtents "song added" or "not yet added"
mapping(address => mapping(bytes32 => bool)) public nested;


    /// @notice shows if a song has been added or not
    /// @param SongID : the SHA-256 hash of the song file.
    /// @return boolean that represtents "song added" or "not yet added"
function verifySong1(bytes32 SongID1) public view returns (bool) {

        address _addr;

        _addr = msg.sender;

        return nested[_addr][SongID1];
    }
    /// @notice Add a song that's made up of the hash and sender address.
    /// @param SongID : the SHA-256 hash of the song file.
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