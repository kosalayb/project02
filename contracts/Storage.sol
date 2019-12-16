pragma solidity ^0.5.0;

contract Storage{
    
    string public data ; // store in the blockchain
    
    function set(string memory _data) public { //memory says store temporary
        data = _data;
    } 
    
    function get()view public returns(string memory){   //view - read storage of smart contract
        return data;
    }
}