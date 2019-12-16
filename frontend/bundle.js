var contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];
//var contractAddress = '0x9C02bA1f33003aD90d159C4ba3225099DC471766';
var contractAddress = '0x317045D9Aa81f06fD2AaB3A413bBF6E09bcdDdC8';
var web3 = new Web3('http://127.0.0.1:9545');
var instance = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
	instance.methods.hello().call()
		.then(result => {
			//console.log("result",result);
			document.getElementById("hello").innerHTML = result;
	});
});
