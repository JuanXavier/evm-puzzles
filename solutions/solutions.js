Level 7

PUSH1 00 // 00 is the opcode for STOP
PUSH1 00 // this will be used as the offset of MSTORE8 that store 1 byte in memory
MSTORE8 // will store in memory from offset 0 the `00` value (from the first PUSH1)
PUSH1 01 // how many bytes must be returned
PUSH1 00 // from which memory offset return those bytes
RETURN

//  600160005360016000F3 