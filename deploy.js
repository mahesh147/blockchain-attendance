const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
    "illness glass polar alpha power drum public estate vehicle visa excess six",
    "https://rinkeby.infura.io/v3/46f92e822ed746b1af02ec476a1019c2"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account: ", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: "0x" + bytecode })
        .send({ gas: "1000000", from: accounts[0] });

    console.log("Contract deployed to ", result.options.address);
};

deploy();
