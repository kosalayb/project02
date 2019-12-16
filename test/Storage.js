const Storage = artifacts.require('./contracts/Storage.sol')

contract('Storage',() =>{
	it('Should set the value of data variable', async () => {
		const storage = await Storage.deployed();
		await storage.set('this');
		const result = await storage.get();
		assert(result == 'this');
	});
});