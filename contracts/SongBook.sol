// SPDX-License-Identifier: MIT

pragma solidity 0.7.0;


import "@openzeppelin/contracts/access/Ownable.sol";


/// @title A system that stores and verifies an a songwriter's work.
/// @author Tanner Davis 
/// @notice This is not the most practical way of achieving the goal set in the README.md. 
/// @notice I plan to implent filecoin or NFTs to make it gas efficient and more straightforward.

contract SongBook {
    
    address public owner;


    constructor() {
        owner = msg.sender;
    }


    modifier onlyOwner() {
      require(msg.sender == owner, "Not owner");
        
        _;
    }
/// @notice An extra layer of proof that no one can alter the contract.
   function renounceOwnership() public onlyOwner {
   }
    
     uint public SongID;
     uint public UserID;
    
    
    event songAdded(uint SongID);

    
    struct song {
        string hash;
        uint SongID;
    }



  struct user {
        string name;
        uint UserId;
    }
    
    
  mapping(address => user) public Users;
  
  mapping(uint => address) public UserIDs;
  
  mapping(uint => song) public Songs;
  
  
mapping(address => mapping(string => bool)) public nested;

function verifySong1(string memory SongID1) public view returns (bool) {

        address _addr;

        _addr = msg.sender;

        return nested[_addr][SongID1];
    }

    function addSong1(
        string memory SongID1) public payable {  
        bool _boo;
        _boo = true;
        address _addr;
        _addr = msg.sender;

     nested[_addr][SongID1] = _boo;
    }

    function remove(address _addr, string memory SongID1) public {
        delete nested[_addr][SongID1];
    }

/// @notice   Adds a new member to the contract. 
/// @notice   Referenced in the verifySongfunction.
  function addUser(string memory _name) public {
        UserID += 1;
        Users[msg.sender].name = _name;
        UserIDs[UserID] = msg.sender;
    }
    

/// @notice Allows user to log a song to the contract
/// @notice via a hash of their audio file.
  function addSong(string memory _hash) public payable returns (uint) {
        SongID += 1;
        Songs[SongID].hash = _hash;
        emit songAdded(SongID);
        return SongID;
    }


/// @notice Demonstrates that the file hash and user match.
   function verifySong(string memory _hash, uint _userID) public {
      Users[msg.sender].UserId = _userID;
      Songs[SongID].hash = _hash;
  }
    
}
