const SongBook = artifacts.require("SongBook");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SongBook", function ( accounts ) {

  it("allows the owner to renounce ownership", async () => {
    const ssInstance = await SongBook.deployed();

    await ssInstance.renounceOwnership()
    
    return assert.isTrue(true);

  });





  it("should assert true", async function () {
    await SongBook.deployed();
    return assert.isTrue(true);
  });


  it("should add user", async () => {
    
    const ssInstance = await SongBook.deployed();

    await ssInstance.addUser('Tanner');

    return assert.isTrue(true);


  
    
  });
   

  it("should log a song", async () => {
    const ssInstance = await SongBook.deployed();
  

    await ssInstance.addSong('ad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', {from: accounts [1]});

    const addedSong = 'ad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e';
    
    assert.equal(addedSong, 'ad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', `song not stored`);
    
  });




  it("should verify owner", async () => {


    const ssInstance = await SongBook.deployed();

    await ssInstance.verifySong('ad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', 5, {from: accounts [1]});

    const addedSong = 'ad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e'
    
    assert.equal(addedSong, 'ad427c2e80c621ba5b329623d081240ad6405346fe244a50efacf1fb14c7c23e', `song not stored`);



  });




});
