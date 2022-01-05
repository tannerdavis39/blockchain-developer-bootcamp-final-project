const contract2 = artifacts.require("contract2");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("contract2", function ( accounts ) {



  it("should deploy", async function () {
    await contract2.deployed();
    return assert.isTrue(true);
  });



   

  it("should log a song", async () => {

    const Instance = await contract2.deployed();
  

    await Instance.addSong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    const addedSong1 = '0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e';
    
    assert.equal(addedSong1, '0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', `song not stored`);
    
  });




  it("should verify if song is logged to chain", async () => {


    const Instance = await contract2.deployed();

    await Instance.addSong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});


    const verify = await Instance.verifySong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

   
   
    assert.equal(verify, true);



  });


  it("should allow owner to remove their song", async () => {
    
    const Instance = await contract2.deployed();

    await Instance.addSong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    const verify1 = await Instance.verifySong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    await Instance.remove(accounts [1], '0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e');

    const verify2 = await Instance.verifySong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    assert.equal(false, verify2);

});

  it("should allow user to verify if a song is logged without sending a transaction" , async () => {

    const Instance = await contract2.deployed();

    await Instance.addSong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    const nest = await Instance.nested(accounts [1], '0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e')

    assert.equal(nest, true);
  });

  it("should limit access to the remove function to the owner of the contract", async () => {
    
    const Instance = await contract2.deployed();

    await Instance.addSong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    const verify1 = await Instance.verifySong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    await Instance.remove(accounts [1], '0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e');

    const verify2 = await Instance.verifySong1('0xad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    assert.equal(false, verify2);

});

});
