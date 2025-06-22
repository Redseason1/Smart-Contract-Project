const pet_ABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_policyNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_reason",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bankAccount",
				"type": "string"
			}
		],
		"name": "addClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_age",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_imageUrl",
				"type": "string"
			}
		],
		"name": "addPetData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_policyNumber",
				"type": "string"
			}
		],
		"name": "addPolicy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_caseRecord",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_doctor",
				"type": "string"
			}
		],
		"name": "addRecordByID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_policyNumber",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_approve",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "addResult",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_age",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_imageUrl",
				"type": "string"
			}
		],
		"name": "modifyPetData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_insurance",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_hospital",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getarray",
		"outputs": [
			{
				"internalType": "string[][]",
				"name": "",
				"type": "string[][]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_policyNumber",
				"type": "string"
			}
		],
		"name": "getDetailData",
		"outputs": [
			{
				"internalType": "string",
				"name": "_reason",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bankAccount",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_approve",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getPetCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getPetDataByID",
		"outputs": [
			{
				"internalType": "address",
				"name": "_host",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_age",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_caseRecord",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_policyNumber",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]