import './config';
import { combineReducers, createStore } from "redux";
import BigNumber from "bignumber.js"
import Account from '../../src/js/services/account';
import { localeReducer } from 'react-localize-redux';
import { initialize } from 'react-localize-redux';

function tokens() {
    return {
        tokens: {
            "ETH": {
                name: "Ethereum",
                symbol: "ETH",
                icon: "/assets/img/tokens/eth.svg",
                address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                decimal: 18,
                balance: new BigNumber(Math.pow(10, 19))
            },
            "OMG": {
                name: "OmiseGO",
                symbol: "OMG",
                icon: "/assets/img/tokens/omg.svg",
                address: "0x1795b4560491c941c0635451f07332effe3ee7b3",
                decimal: 9,
                balance: new BigNumber(Math.pow(10, 18))
            }
        }
    }
}

function utils() {
    return {}
}

function txs() {
    return {}
}

function connection() {
    return {
        ethereum: {
            call: (callback) => {
                return ethFunc[callback];
            }
        }
    }
}

let ethFunc = {
    getBalance: () => Promise.resolve(0),
}

function account(state, action) {
    return {
        account: new Account(
            '0x12f0453c1947269842c5646df98905533c1b9519',
            'keystore','',0,0,0,''
        ),
        pKey: {
            error: '',
            modalOpen: '',
        }
        
    }
}

function exchange() {
    return {
        offeredRate: 0,
        sourceAmount: '',
        destAmount: '',
        bcError: '',
        sourceTokenSymbol: '',
        minConversionRate: '0',
        offeredRate: '3296591097476482885',
        offeredRateBalance: '8739437467440',
        destTokenSymbol: 'OMG',
        errors: {}
    }
}

function transfer() {
    return {
        offeredRate: 0,
        tokenSymbol: 'ETH',
        amount: '',
        destAddress: '',
        errors: {}
    }
}

function global() {
    return {
        history: {}
    }
}

function locale(state, action) {
    return {
        languages: [
            {code: "en", active: false},
            {code: "active", active: true, _v: "10"}
        ],
        translations: {},
        options: { renderInnerHtml: true, showMissingTranslationMsg: true } 
    }
}

const reducer = combineReducers({
    tokens, utils, account, txs, connection, exchange, transfer, global, locale
})

const store = createStore(reducer);
export default store;