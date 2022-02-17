pragma solidity ^0.8.0;

import "./BloryUst.sol";
import "./BloryToken.sol";

contract BloryFarm {
    string public name = "Blory Farm";

    BloryToken public bloryToken;
    BloryUst public bloryUst;

    constructor( BloryUst _bloryUst, BloryToken _bloryToken)  {
        bloryToken = _bloryToken;
        bloryUst = _bloryUst;
        
    }
}