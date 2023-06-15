import { ethers, upgrades } from "hardhat";

async function main() {
  const newBox = await ethers.getContractFactory("NewBox");

  // there are some typechain issues with the upgradeProxy function
  const boxProxy2 = await upgrades.upgradeProxy(
    "0x885edfd5d508bd7f2c48ab557c415f251ee5ffe2",
    newBox
  );

  console.log("BoxProxy implementation upgraded to:", boxProxy2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
