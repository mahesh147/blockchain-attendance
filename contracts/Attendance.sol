pragma solidity ^0.4.7;
pragma experimental ABIEncoderV2;

contract Attendance {
    
    mapping(uint => string[])public absenteeNames;
    
    address public admin;
    
    constructor() public {
        admin = msg.sender;
    }
    
    modifier restricted {
        require(admin == msg.sender);
        _;
        
    }
    
    function markAttendance(uint dateOfAttendance, string[] names) public restricted {
        absenteeNames[dateOfAttendance] = names;
    }
    
    function returnAbsenteeList(uint dateOfAttendance) public view returns (string[]) {
        return absenteeNames[dateOfAttendance];
    }
    
}