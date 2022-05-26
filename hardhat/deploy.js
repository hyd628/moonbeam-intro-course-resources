// scripts/deploy.js
async function main() {
    // 1. Get the contract to deploy
    const MyToken = await ethers.getContractFactory('MyToken');
    console.log('Deploying ERC-20....');

    // 2. Instantiating a new MyToken smart contract
    const MyTokenContract = await MyToken.deploy();

    // 3. Waiting for the deployment to resolve
    await MyTokenContract.deployed();

    // 4. Use the contract instance to get the contract address
    console.log('MyToken deployed to:', MyTokenContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });