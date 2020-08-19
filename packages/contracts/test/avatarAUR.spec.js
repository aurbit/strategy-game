const chai = require('chai')
const AvatarAUR = artifacts.require('AvatarAUR')
const web3 = require('web3')
const gasCost = require('./gas-cost')

contract('AvatarAUR', accounts => {
  const mintingFee = 10000000000000000

  it('Should deploy a new AvatarAUR Contract', async () => {
    const instance = await AvatarAUR.deployed()

    chai.expect(
      typeof instance.address === 'string',
      'Invaid contract deployed'
    )
  })

  it('Should mint a new avatar token no Event', async () => {
    const instance = await AvatarAUR.deployed()

    // [haircolor[0],haircolor[1],haircolor[2],eyecolor[0],eyecolor[1],eyecolor[2],skincolor[0],skincolor[1],skincolor[2],hairtype,eyetype,skintype,mouth,gender,race]
    const dna = [165, 228, 239, 117, 68, 239, 5, 4, 239, 153, 5, 2, 9, 3, 85]
    const dnaC = web3.utils.hexToNumberString(web3.utils.bytesToHex(dna))
    const result = await instance.mintAvatar('bob', dnaC, {
      value: mintingFee
    })

    const dnaInteger = await instance.getDNA('1', { from: accounts[0] })

    const dnaArray = await web3.utils.hexToBytes(
      web3.utils.padLeft(web3.utils.toHex(dnaInteger), 36)
    )
    const test = dnaArray.length === dna.length + 3
    await chai.expect(test).is.true
  })

  it('Should get the avatar dna', async () => {
    const instance = await AvatarAUR.deployed()

    const dna = await instance.getDNA(1)
    chai.expect(dna.length === 6).is.true
  })

  it('Should get the mintingFee', async () => {
    const instance = await AvatarAUR.deployed()

    const fee = await instance.createAvatarFee.call()
    chai.expect(fee.toString() === mintingFee).is.not.null
  })

  it('Should get the avatars for the address', async () => {
    const instance = await AvatarAUR.deployed()
    const avatars = await instance.getAvatars(accounts[0])
    chai.expect(avatars[0].name === 'bob')
  })

  it('should get the total supply of AURA tokens', async () => {
    const instance = await AvatarAUR.deployed()
    const supply = await instance.totalSupply()
    console.log(supply)
    chai.expect(supply > 0)
  })
})
