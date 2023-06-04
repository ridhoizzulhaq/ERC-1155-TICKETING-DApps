import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const CONTRACT_ADDRESS = '//masukkan address kontrak disini'; // Ganti dengan alamat kontrak yang sebenarnya

const App = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const contractInstance = new web3.eth.Contract(
          [
            //masukkan ABI disini
          ],
          CONTRACT_ADDRESS
        );
        setContract(contractInstance);
      } else {
        window.alert('Silakan instal Metamask untuk menggunakan DApp ini.');
      }
    } catch (error) {
      console.log(error);
      window.alert('Gagal memuat data blockchain.');
    }
  };

  const validateOwnership = async () => {
    if (contract && account) {
      try {
        const balance = await contract.methods.balanceOf(account, 1).call();
        setIsOwner(balance > 0);
      } catch (error) {
        console.log(error);
        window.alert('Gagal memvalidasi kepemilikan.');
      }
    }
  };

  const handleValidation = async () => {
    validateOwnership();
  };

  return (
    <div>
      <button onClick={handleValidation}>Validasi Kepemilikan</button>
      {isOwner ? <p>NFT Terdeteksi, silakan masuk</p> : <p>Gagal</p>}
    </div>
  );
};

export default App;
