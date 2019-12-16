const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "data",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

const contractAddress = '0x52Cc31df13b902e0D88661Df6372F1f671969150';
const web3 = new Web3('http://127.0.0.1:9545');
const instance = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
  const $setData = document.getElementById('setData');
  const $data = document.getElementById('data');
  let accounts = [];

  web3.eth.getAccounts()
    .then( _accounts => {
        accounts = _accounts;
    });

  const getData = () =>{
    instance.methods
      .get()
      .call()
      .then(result =>{
          $data.innerHTML = result;
      });
  }

  getData();
  $setData.addEventListener('submit', e =>{
    e.preventDefault();
    const data = e.target.elements[0].value;
    instance.methods
      .set(data)
      .send({from:accounts[0]})
      .then(getData);
  })

});