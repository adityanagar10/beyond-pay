const main = async () => {

  // This is a Function Factory which generates instances of the contract

  const Transactions = await hre.ethers.getContractFactory("Transactions");

  // A single instance of the contract

  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  } catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain();
