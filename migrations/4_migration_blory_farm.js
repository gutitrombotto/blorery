const BloryUST = artifacts.require("BloryUst");
const BloryToken = artifacts.require("BloryToken");
const BloryFarm = artifacts.require("BloryFarm");

module.exports = async function (deployer, network, accounts) {
  const bloryUst = await BloryUST.deployed()
  const bloryToken = await BloryToken.deployed()

  await deployer.deploy(BloryFarm, bloryUst.address, bloryToken.address);
  const bloryFarm = await BloryFarm.deployed()

};
