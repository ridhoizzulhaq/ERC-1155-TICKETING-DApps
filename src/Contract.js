import {ethers} from 'ethers';

const contractAddress = '0x88bdEB822Fa9c8D8341dECA25c95072a72F48701'; // Ganti dengan alamat kontrak Tiket yang telah Anda deploy

const abi = [
  
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "ApprovalForAll",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256[]",
						"name": "ids",
						"type": "uint256[]"
					},
					{
						"indexed": false,
						"internalType": "uint256[]",
						"name": "values",
						"type": "uint256[]"
					}
				],
				"name": "TransferBatch",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "TransferSingle",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "string",
						"name": "value",
						"type": "string"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					}
				],
				"name": "URI",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address[]",
						"name": "accounts",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "ids",
						"type": "uint256[]"
					}
				],
				"name": "balanceOfBatch",
				"outputs": [
					{
						"internalType": "uint256[]",
						"name": "",
						"type": "uint256[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "buyTicket",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					}
				],
				"name": "isApprovedForAll",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256[]",
						"name": "ids",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "amounts",
						"type": "uint256[]"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"name": "safeBatchTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "setApprovalForAll",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes4",
						"name": "interfaceId",
						"type": "bytes4"
					}
				],
				"name": "supportsInterface",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
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
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "uri",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "withdraw",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, abi, signer);

export default contract;

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Tiket from './contracts/Tiket.json';

const NFTAccessControl = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [isTicketValid, setIsTicketValid] = useState(false);

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.enable();
          setWeb3(web3Instance);
        } catch (error) {
          console.error(error);
        }
      }
    };

    initializeWeb3();
  }, []);

  useEffect(() => {
    const initializeContract = async () => {
      if (web3) {
        try {
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = Tiket.networks[networkId];
          const contractInstance = new web3.eth.Contract(
            Tiket.abi,
            deployedNetwork.address
          );
          setContract(contractInstance);
        } catch (error) {
          console.error(error);
        }
      }
    };

    initializeContract();
  }, [web3]);

  useEffect(() => {
    const getAccount = async () => {
      if (web3) {
        try {
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getAccount();
  }, [web3]);

  const handleValidateTicket = async () => {
    if (contract && account) {
      try {
        const ticketId = 1; // ID tiket yang ingin divalidasi
        const result = await contract.methods.ticketUsed(ticketId).call({ from: account });
        setIsTicketValid(!result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {isTicketValid ? (
        <p>Anda berhak masuk</p>
      ) : (
        <p>Gagal</p>
      )}
      <button onClick={handleValidateTicket}>Validasi Tiket</button>
    </div>
  );
};

export default NFTAccessControl;
