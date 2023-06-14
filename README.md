# proxy-upgrade-learning

```
npx hardhat console --network sepolia

> const Box = await ethers.getContractFactory("Box")
> const box = Box.attach("0x885edfd5d508bd7f2c48ab557c415f251ee5ffe2")
> (await box.retrieve()).toString()
> 42
> await box.increment()
> ERROR

> const NewBox = await ethers.getContractFactory("NewBox")
> const newBox = NewBox.attach("0x885edfd5d508bd7f2c48ab557c415f251ee5ffe2")
> (await newBox.retrieve()).toString()
> 42
> await newBox.increment()
> (await newBox.retrieve()).toString()
> 43
```
