const HelloWorld = artifacts.require('./contracts/HelloWorld.sol')

contract('HelloWorld',() =>{
	it('Should return Hello World', async () => {
		const helloWorld = await HelloWorld.deployed();
		const result = await helloWorld.hello();
		assert(result == 'Hi Kosala, How are you ?');
	});
});