const SongBook = artifacts.require("SongBook");

module.exports = function(deployer) {
  deployer.deploy(SongBook);
}