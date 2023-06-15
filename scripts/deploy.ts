import { ethers, upgrades } from "hardhat";

async function main() {
  const box = await ethers.getContractFactory("Box");

  // there are some typechain issues with the upgradeProxy function
  const boxProxy = await upgrades.deployProxy(box, [42], {
    initializer: "store",
  });

  console.log("BoxProxy deployed to:", boxProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
