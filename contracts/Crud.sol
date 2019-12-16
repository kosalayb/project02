pragma solidity ^0.5.0;

contract Crud{
    
    struct User {
        uint id;
        string name;
    }
    
    User[] public users;
    uint public nextId=1;
    
    
    function create(string memory name) public {
        users.push(User(nextId, name));
        nextId++;
     }
    
    
    function read(uint id) view public returns(uint, string memory){ // string is a complex type
        uint k = find(id);
        return(users[k].id, users[k].name);
    }
    
    
    function update(uint id, string memory name) public{
        uint k=find(id);
        users[k].name = name;
    }
    
    
    function destroy(uint id) public {
        uint k = find(id);
        delete users[k];
    }
    
    
    //utility function to find the index of user
    function find(uint id)view internal returns(uint){
        
        for(uint i =0; i < users.length; i++){
            if(users[i].id == id){
                return i; // return possition
            }
        }
        revert('User does not exist !'); // state change is cancelled if id does not exist
        
    }
    
    
}