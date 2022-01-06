"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._bytecode = exports._abi = exports.ERC20Token__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class ERC20Token__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(exports._abi, exports._bytecode, signer);
    }
    deploy(name, symbol, decimals, overrides) {
        return super.deploy(name, symbol, decimals, overrides || {});
    }
    getDeployTransaction(name, symbol, decimals, overrides) {
        return super.getDeployTransaction(name, symbol, decimals, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, exports._abi, signerOrProvider);
    }
}
exports.ERC20Token__factory = ERC20Token__factory;
exports._abi = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "spender",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                name: "",
                type: "address",
            },
        ],
        name: "canImplementInterfaceForAddress",
        outputs: [
            {
                name: "",
                type: "bytes32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "spender",
                type: "address",
            },
            {
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                name: "success",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isPauser",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renouncePauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "burnFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addPauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "spender",
                type: "address",
            },
            {
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                name: "success",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
            {
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                name: "name",
                type: "string",
            },
            {
                name: "symbol",
                type: "string",
            },
            {
                name: "decimals",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "MinterAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "MinterRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
exports._bytecode = "0x60806040523480156200001157600080fd5b506040516200167938038062001679833981018060405260608110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b505060209091015160008054600160a060020a0319163317808255604051939550919350859285928592600160a060020a0391909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36200013b33640100000000620001f1810204565b6200014f3364010000000062000243810204565b6006805460ff1916905582516200016e906007906020860190620003c6565b50815162000184906008906020850190620003c6565b506009805460ff191660ff92909216919091179055505060408051808201909152600a81527f4552433230546f6b656e000000000000000000000000000000000000000000006020820152620001e890640100000000620002958102620010f61704565b5050506200046b565b6200020c600482640100000000620010a86200033382021704565b604051600160a060020a038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200025e600582640100000000620010a86200033382021704565b604051600160a060020a038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600a6000836040516020018082805190602001908083835b60208310620002d05780518252601f199092019160209182019101620002af565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600160a060020a03811615156200034957600080fd5b6200035e82826401000000006200038e810204565b156200036957600080fd5b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b6000600160a060020a0382161515620003a657600080fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200040957805160ff191683800117855562000439565b8280016001018555821562000439579182015b82811115620004395782518255916020019190600101906200041c565b50620004479291506200044b565b5090565b6200046891905b8082111562000447576000815560010162000452565b90565b6111fe806200047b6000396000f3fe608060405234801561001057600080fd5b50600436106101685760003560e060020a90048063715018a6116100cd578063715018a61461039f57806379cc6790146103a757806382dc1ec4146103d35780638456cb59146103f95780638da5cb5b146104015780638f32d59b1461042557806395d89b411461042d578063983b2d5614610435578063986502751461045b578063a457c2d714610463578063a9059cbb1461048f578063aa271e1a146104bb578063dd62ed3e146104e1578063f2fde38b1461050f57610168565b806306fdde031461016d578063095ea7b3146101ea57806318160ddd1461022a57806323b872dd14610244578063249cb3fa1461027a578063313ce567146102a657806339509351146102c45780633f4ba83a146102f057806340c10f19146102fa57806342966c681461032657806346fbf68e146103435780635c975abb146103695780636ef8d66d1461037157806370a0823114610379575b600080fd5b610175610535565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101af578181015183820152602001610197565b50505050905090810190601f1680156101dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102166004803603604081101561020057600080fd5b50600160a060020a0381351690602001356105cb565b604080519115158252519081900360200190f35b6102326105f1565b60408051918252519081900360200190f35b6102166004803603606081101561025a57600080fd5b50600160a060020a038135811691602081013590911690604001356105f7565b6102326004803603604081101561029057600080fd5b5080359060200135600160a060020a031661061d565b6102ae61068a565b6040805160ff9092168252519081900360200190f35b610216600480360360408110156102da57600080fd5b50600160a060020a038135169060200135610693565b6102f86106b0565b005b6102166004803603604081101561031057600080fd5b50600160a060020a038135169060200135610714565b6102f86004803603602081101561033c57600080fd5b503561073d565b6102166004803603602081101561035957600080fd5b5035600160a060020a031661074a565b61021661075d565b6102f8610766565b6102326004803603602081101561038f57600080fd5b5035600160a060020a0316610771565b6102f861078c565b6102f8600480360360408110156103bd57600080fd5b50600160a060020a0381351690602001356107e9565b6102f8600480360360208110156103e957600080fd5b5035600160a060020a03166107f7565b6102f8610814565b61040961087a565b60408051600160a060020a039092168252519081900360200190f35b610216610889565b61017561089a565b6102f86004803603602081101561044b57600080fd5b5035600160a060020a03166108fb565b6102f8610918565b6102166004803603604081101561047957600080fd5b50600160a060020a038135169060200135610921565b610216600480360360408110156104a557600080fd5b50600160a060020a03813516906020013561093e565b610216600480360360208110156104d157600080fd5b5035600160a060020a031661095b565b610232600480360360408110156104f757600080fd5b50600160a060020a038135811691602001351661096e565b6102f86004803603602081101561052557600080fd5b5035600160a060020a0316610999565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105c15780601f10610596576101008083540402835291602001916105c1565b820191906000526020600020905b8154815290600101906020018083116105a457829003601f168201915b5050505050905090565b60065460009060ff16156105de57600080fd5b6105e883836109b5565b90505b92915050565b60035490565b60065460009060ff161561060a57600080fd5b610615848484610a21565b949350505050565b6000828152600a602052604081205460ff16156106825760405160200180807f455243313832305f4143434550545f4d4147494300000000000000000000000081525060140190506040516020818303038152906040528051906020012090506105eb565b5060006105eb565b60095460ff1690565b60065460009060ff16156106a657600080fd5b6105e88383610ad8565b6106b93361074a565b15156106c457600080fd5b60065460ff1615156106d557600080fd5b6006805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b600061071f3361095b565b151561072a57600080fd5b6107348383610b76565b50600192915050565b6107473382610c10565b50565b60006105eb60058363ffffffff610ca916565b60065460ff1690565b61076f33610ce0565b565b600160a060020a031660009081526001602052604090205490565b610794610889565b151561079f57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360008054600160a060020a0319169055565b6107f38282610d28565b5050565b6108003361074a565b151561080b57600080fd5b61074781610dd8565b61081d3361074a565b151561082857600080fd5b60065460ff161561083857600080fd5b6006805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b600054600160a060020a031690565b600054600160a060020a0316331490565b60088054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105c15780601f10610596576101008083540402835291602001916105c1565b6109043361095b565b151561090f57600080fd5b61074781610e20565b61076f33610e68565b60065460009060ff161561093457600080fd5b6105e88383610eb0565b60065460009060ff161561095157600080fd5b6105e88383610efb565b60006105eb60048363ffffffff610ca916565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b6109a1610889565b15156109ac57600080fd5b61074781610f08565b6000600160a060020a03831615156109cc57600080fd5b336000818152600260209081526040808320600160a060020a03881680855290835292819020869055805186815290519293926000805160206111b3833981519152929181900390910190a350600192915050565b600160a060020a0383166000908152600260209081526040808320338452909152812054610a55908363ffffffff610f7816565b600160a060020a0385166000908152600260209081526040808320338452909152902055610a84848484610f8d565b600160a060020a0384166000818152600260209081526040808320338085529083529281902054815190815290519293926000805160206111b3833981519152929181900390910190a35060019392505050565b6000600160a060020a0383161515610aef57600080fd5b336000908152600260209081526040808320600160a060020a0387168452909152902054610b23908363ffffffff61104a16565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191936000805160206111b3833981519152929081900390910190a350600192915050565b600160a060020a0382161515610b8b57600080fd5b600354610b9e908263ffffffff61104a16565b600355600160a060020a038216600090815260016020526040902054610bca908263ffffffff61104a16565b600160a060020a03831660008181526001602090815260408083209490945583518581529351929391926000805160206111938339815191529281900390910190a35050565b600160a060020a0382161515610c2557600080fd5b600354610c38908263ffffffff610f7816565b600355600160a060020a038216600090815260016020526040902054610c64908263ffffffff610f7816565b600160a060020a038316600081815260016020908152604080832094909455835185815293519193600080516020611193833981519152929081900390910190a35050565b6000600160a060020a0382161515610cc057600080fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b610cf160058263ffffffff61105c16565b604051600160a060020a038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b600160a060020a0382166000908152600260209081526040808320338452909152902054610d5c908263ffffffff610f7816565b600160a060020a0383166000908152600260209081526040808320338452909152902055610d8a8282610c10565b600160a060020a0382166000818152600260209081526040808320338085529083529281902054815190815290519293926000805160206111b3833981519152929181900390910190a35050565b610de960058263ffffffff6110a816565b604051600160a060020a038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b610e3160048263ffffffff6110a816565b604051600160a060020a038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b610e7960048263ffffffff61105c16565b604051600160a060020a038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6000600160a060020a0383161515610ec757600080fd5b336000908152600260209081526040808320600160a060020a0387168452909152902054610b23908363ffffffff610f7816565b6000610734338484610f8d565b600160a060020a0381161515610f1d57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360008054600160a060020a031916600160a060020a0392909216919091179055565b600082821115610f8757600080fd5b50900390565b600160a060020a0382161515610fa257600080fd5b600160a060020a038316600090815260016020526040902054610fcb908263ffffffff610f7816565b600160a060020a038085166000908152600160205260408082209390935590841681522054611000908263ffffffff61104a16565b600160a060020a03808416600081815260016020908152604091829020949094558051858152905191939287169260008051602061119383398151915292918290030190a3505050565b6000828201838110156105e857600080fd5b600160a060020a038116151561107157600080fd5b61107b8282610ca9565b151561108657600080fd5b600160a060020a0316600090815260209190915260409020805460ff19169055565b600160a060020a03811615156110bd57600080fd5b6110c78282610ca9565b156110d157600080fd5b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b6001600a6000836040516020018082805190602001908083835b6020831061112f5780518252601f199092019160209182019101611110565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff0219169083151502179055505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a165627a7a72305820d61acef7892751008f8ccd64b0bd1566515855abc330c157be85150601f03dcb0029";
//# sourceMappingURL=ERC20Token__factory.js.map