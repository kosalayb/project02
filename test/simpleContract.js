const SimpleContract = artifacts.require('./contracts/SimpleContract.sol')

contract('SimpleContract',() =>{
	it('Should deploy smart contract properly', async () => {
		const simpleContract = await SimpleContract.deployed();
		assert(simpleContract.address !== '');
	});
});