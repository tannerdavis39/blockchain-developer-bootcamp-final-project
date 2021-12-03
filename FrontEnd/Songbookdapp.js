

// contract address on Ropsten:
const ssAddress = '0xFbACACB9ca4c9CC7470f077a69B25F76A210a66f'

// add contract ABI from Remix:

const ssABI =

[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "SongID1",
				"type": "string"
			}
		],
		"name": "addSong1",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "nested",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "SongID1",
				"type": "string"
			}
		],
		"name": "remove",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "SongID1",
				"type": "string"
			}
		],
		"name": "verifySong1",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]




// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {
  
  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Is Available!'

      // add in web3 here
      var web3 = new Web3(window.ethereum)

    } else {
      console.log('MetaMask is not available')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Not Available!'
      // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
      // mmDetected.appendChild(node)
    }
  } else {
    console.log('window.ethereum is not found')
    let mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>Wallet Not Available!<p>'
  }
})




var web3 = new Web3(window.ethereum)

// Grabbing the button object,  

const mmEnable = document.getElementById('mm-connect');

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account. 
// 
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example
 
mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})
  // grab mm-current-account
  // and populate it with the current address
  var mmCurrentAccount = document.getElementById('mm-current-account');
  mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
}

// grab the button for input to a contract:

const ssSubmit1 = document.getElementById('ss-input-button1');

ssSubmit1.onclick = async () => {
  // grab value from input
  
  const ssInputValue1 = document.getElementById('ss-input-box1').value;
  console.log(ssInputValue1)


  var web3 = new Web3(window.ethereum)

  // instantiate smart contract instance
  
  const SongBook = new web3.eth.Contract(ssABI, ssAddress)
  
  SongBook.setProvider(window.ethereum)

  await SongBook.methods.addSong1(ssInputValue1).send({from: ethereum.selectedAddress});

}

const ssSubmit2 = document.getElementById('ss-input-button2');

ssSubmit2.onclick = async () => {
  // grab value from input
  
  const ssInputValue2 = document.getElementById('ss-input-box2');
  console.log(ssInputValue2)


  var web3 = new Web3(window.ethereum)

  // instantiate smart contract instance
  
 const SongBook = new web3.eth.Contract(ssABI, ssAddress)
  SongBook.setProvider(window.ethereum)

 
 const verified = await SongBook.methods.nested(ethereum.selectedAddress, ssInputValue2).call({from: ethereum.selectedAddress})

 console.log(verified)

  const ssDisplayValue = document.getElementById('ss-display-value')

  ssDisplayValue.innerHTML = 'Song is verified: ' + verified

  

}



