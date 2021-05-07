const Web3 = require('web3');
const {signAndSend} = require('./utils');
const config = require('dotenv').config();

const nodeList = [
    'https://bsc-dataseed.binance.org',
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed2.defibit.io',
    'https://bsc-dataseed3.defibit.io',
    'https://bsc-dataseed4.defibit.io',
    'https://bsc-dataseed1.binance.org',
    'https://bsc-dataseed2.binance.org',
    'https://bsc-dataseed3.binance.org'
];


(async () => {
    try {
        const web3 = new Web3(new Web3.providers.HttpProvider(nodeList[Math.floor(Math.random()*nodeList.length)]));

        const abi = JSON.parse(`[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_delevPartial","type":"bool"},{"internalType":"uint256","name":"_minBaseAmt","type":"uint256"}],"name":"deleverage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deleverageOnce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deleverageUntilNotOverLevered","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"newRate","type":"uint256"},{"internalType":"uint256","name":"rewardToUser","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseAmount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[{"internalType":"uint256","name":"_userReward","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_bForceUpdate","type":"bool"}],"name":"getCRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"uint256","name":"_supplyBalBase","type":"uint256"},{"internalType":"uint256","name":"_supplyBal","type":"uint256"},{"internalType":"uint256","name":"_borrowBal","type":"uint256"},{"internalType":"uint256","name":"_supplyBalTargeted","type":"uint256"},{"internalType":"uint256","name":"_supplyBalMin","type":"uint256"},{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"uint256","name":"_systemBalanceTotalUSD","type":"uint256"},{"internalType":"uint256","name":"_totalUserDepositsUSD","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userWallet","type":"address"}],"name":"getUserBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"pendingBalance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_vBoostedTokenAddress","type":"address"},{"internalType":"address","name":"_vBaseTokenAddress","type":"address"},{"internalType":"uint256","name":"_borrowRate","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"leverage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"inputs":[{"internalType":"uint256","name":"_borrowRate","type":"uint256"},{"internalType":"uint256","name":"_borrowDepth","type":"uint256"},{"internalType":"address","name":"_vNewBoostedAsset","type":"address"},{"internalType":"bool","name":"_bCalcCRate","type":"bool"}],"name":"rebalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"removeSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"repayBorrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"},{"internalType":"bool","name":"_bActivate","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"setBoostedMinAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_controllerFee","type":"uint256"}],"name":"setControllerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_entranceFeeFactor","type":"uint256"}],"name":"setEntranceFeeFactor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMinUnwinded","type":"uint256"}],"name":"setMinUnwinded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newRewardToken","type":"address"},{"internalType":"uint256","name":"_newBorrowRateDanger","type":"uint256"},{"internalType":"uint256","name":"_newReward","type":"uint256"},{"internalType":"uint256","name":"_newRewardPerBlock","type":"uint256"}],"name":"setRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_borrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_borrowDepth","type":"uint256"}],"name":"StratRebalance","type":"event"},{"inputs":[{"internalType":"address","name":"vToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"supply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"updateBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userWallet","type":"address"}],"name":"userDeposit","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"pendingBalance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseAmountToWithdraw","type":"uint256"},{"internalType":"bool","name":"bEarn","type":"bool"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrapBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseLockedInHere","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseLockedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"baseToBoostedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boostedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boostedLockedInHere","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boostedMinAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"borrowBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"borrowDepth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"borrowRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"borrowRateDanger","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_targetBoostedAmt","type":"uint256"}],"name":"calcPartOfSupplyToRemove","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"entranceFeeFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastAPY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastEarnBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minUnwinded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supplyBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supplyBalBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supplyBalMin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supplyBalTargeted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vBaseTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vBoostedTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"venusMarkets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`);
        const contracts = ['0xab2f29783265940305ea99573aa18bd301911a09', // BUSD
                           '0x7ca1fea7d198ceae9a319b5ee89e860aab7d82d7', // BTCB
                           '0x735ba150d6a842b1fee3737f023fddf781cfeaa0', // ETH
                           '0x2dF142Fc7E0f7164C90C9f93E3012d956C34C299', // XRP
                           '0xaa954F2c619377A61380bFD084359e69d445a856'  // DOT
        ];

        const USER_ADDRESS = config.parsed.USER_ADDRESS;
        const USER_PK = config.parsed.USER_PK;
        const WITH_PROFIT_ONLY = config.parsed.WITH_PROFIT_ONLY * 1;

        console.log(`Script running in ${WITH_PROFIT_ONLY ? 'only *with profit* mode' : 'normal mode'}`);

        if (!(/^0x[a-fA-F0-9]{40}$/.test(USER_ADDRESS))) {
            throw new Error(`${USER_ADDRESS} has wrong format`);
        }
        if (!(/^[a-fA-F0-9]{64}$/.test(USER_PK))) {
            throw new Error(`PK has wrong format`);
        }

        for (let cAddress of contracts) {
            const strategy = new web3.eth.Contract(abi, cAddress);
            const info = await strategy.methods.deleverageUntilNotOverLevered().call();
            const borrowRateDanger = await strategy.methods.borrowRateDanger().call();
            console.log(`Contract ${cAddress} crate = ${info.rate / 10} new rate = ${info.newRate / 10} reward = ${info.rewardToUser} borrowRateDanger=${borrowRateDanger/10}`);

            const isNeedToSendTrx = (WITH_PROFIT_ONLY && info.rewardToUser > 0 && info.newRate * 1 < info.rate * 1 && info.rate *1 > borrowRateDanger * 1) ||
                                    (!WITH_PROFIT_ONLY && ((info.rate *1 > borrowRateDanger * 1 && info.newRate * 1 < info.rate * 1) || info.rewardToUser > 0));

            if (isNeedToSendTrx) {
                console.log('Sending trx...');
                // await (new Promise((x)=>setTimeout(x, 4000)));

                console.log('USER_ADDRESS', USER_ADDRESS);
                const callData = strategy.methods.deleverageUntilNotOverLevered().encodeABI();
                const gasPrice = await web3.eth.getGasPrice();
                const gasAmount = await strategy.methods.deleverageUntilNotOverLevered().estimateGas({from: USER_ADDRESS});
                const lastNonce = (await web3.eth.getTransactionCount(USER_ADDRESS)) * 1;
                if (gasAmount > 6000000) throw new Error('gas too high');

                console.log('gasAmount', gasAmount, 'gasPrice', gasPrice, 'lastNonce', lastNonce, 'callData', callData);
                const trxData = {
                    payloadData: callData,
                    from: USER_ADDRESS,
                    gasPrice: gasPrice,
                    gas: gasAmount,
                    to: cAddress,
                    nonce: lastNonce
                };
                const {hash, nonce} = await signAndSend({
                    web3,
                    payloadData: callData,
                    from: USER_ADDRESS,
                    pk: USER_PK,
                    gasPrice: gasPrice,
                    gas: gasAmount * 1 + 100000,
                    to: cAddress,
                    nonce: lastNonce
                });

                console.log('hash', hash);
                await (new Promise((x) => setTimeout(x, 12000)));
            }
        }
    }catch (e) {
        console.error(e);
        await (new Promise((x)=>setTimeout(x, 5000)));
        process.exit();
    }

    console.log('wait...');
    await (new Promise((x)=>setTimeout(x, 25000)));
    process.exit();


})();
