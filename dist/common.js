"use strict";
var CurrencyConversion_1 = require("./data/CurrencyConversion");
//holds mock peg data for sync testing
exports.mockPeg = {
    "rates": [
        { "currency": "USD", "rate": 0.5, "escrowfee": 0.005, "precision": 2 },
        { "currency": "EUR", "rate": 2695.2, "escrowfee": 0.005, "precision": 2 },
        { "currency": "GBP", "rate": 2697.3, "escrowfee": 0.005, "precision": 2 },
        { "currency": "CAD", "rate": 2698.0, "escrowfee": 0.005, "precision": 2 },
        { "currency": "BTC", "rate": 100000.0, "fee": 75, "escrowfee": 0.01, "precision": 8 },
        { "currency": "ZEC", "rate": 10000.0, "fee": 50, "escrowfee": 0.01, "precision": 8 },
        { "currency": "SYS", "rate": 1.0, "fee": 1000, "escrowfee": 0.005, "precision": 2 }
    ]
};
exports.supportedCurrencies = [
    /* FIAT CURRENCIES */
    CurrencyConversion_1.CurrencyConversionType.FIAT.USD,
    CurrencyConversion_1.CurrencyConversionType.FIAT.GBP,
    CurrencyConversion_1.CurrencyConversionType.FIAT.CNY,
    CurrencyConversion_1.CurrencyConversionType.FIAT.EUR,
    CurrencyConversion_1.CurrencyConversionType.FIAT.CAD,
    CurrencyConversion_1.CurrencyConversionType.FIAT.AUD,
    CurrencyConversion_1.CurrencyConversionType.FIAT.BGN,
    CurrencyConversion_1.CurrencyConversionType.FIAT.BRL,
    CurrencyConversion_1.CurrencyConversionType.FIAT.CHF,
    CurrencyConversion_1.CurrencyConversionType.FIAT.CZK,
    CurrencyConversion_1.CurrencyConversionType.FIAT.DKK,
    CurrencyConversion_1.CurrencyConversionType.FIAT.HKD,
    CurrencyConversion_1.CurrencyConversionType.FIAT.HRK,
    CurrencyConversion_1.CurrencyConversionType.FIAT.HUF,
    CurrencyConversion_1.CurrencyConversionType.FIAT.IDR,
    CurrencyConversion_1.CurrencyConversionType.FIAT.ILS,
    CurrencyConversion_1.CurrencyConversionType.FIAT.INR,
    CurrencyConversion_1.CurrencyConversionType.FIAT.JPY,
    CurrencyConversion_1.CurrencyConversionType.FIAT.KRW,
    CurrencyConversion_1.CurrencyConversionType.FIAT.MXN,
    CurrencyConversion_1.CurrencyConversionType.FIAT.MYR,
    CurrencyConversion_1.CurrencyConversionType.FIAT.NOK,
    CurrencyConversion_1.CurrencyConversionType.FIAT.NZD,
    CurrencyConversion_1.CurrencyConversionType.FIAT.PHP,
    CurrencyConversion_1.CurrencyConversionType.FIAT.PLN,
    CurrencyConversion_1.CurrencyConversionType.FIAT.RON,
    CurrencyConversion_1.CurrencyConversionType.FIAT.RUB,
    CurrencyConversion_1.CurrencyConversionType.FIAT.SEK,
    CurrencyConversion_1.CurrencyConversionType.FIAT.SGD,
    CurrencyConversion_1.CurrencyConversionType.FIAT.THB,
    CurrencyConversion_1.CurrencyConversionType.FIAT.TRY,
    CurrencyConversion_1.CurrencyConversionType.FIAT.ZAR,
    /* BLOCKCHAIN CURRENCIES */
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.AMP,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.ARDR,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BBR,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BTC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BCN,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BCY,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BELA,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BITS,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BLK,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BTCD,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BTM,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BTS,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.BURST,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.C2,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.CLAM,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.CURE,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.DASH,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.DCR,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.DGB,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.DOGE,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.EMC2,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.ETC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.ETH,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.EXP,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.FCT,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.FLDC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.FLO,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.GAME,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.GRC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.HUC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.HZ,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.IOC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.LBC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.LSK,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.LTC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.MAID,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.MYR,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NAUT,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NAV,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NEOS,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NMC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NOBL,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NOTE,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NSR,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NXC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.NXT,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.OMNI,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.PASC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.PINK,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.POT,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.PPC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.QBK,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.QORA,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.QTL,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.RADS,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.RBY,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.REP,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.RIC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.SBD,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.SC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.SDC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.SJCX,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.STEEM,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.STR,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.STRAT,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.SYS,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.UNITY,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.VIA,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.WAVES,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.VOX,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.VTC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XBC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XCP,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XEM,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XMG,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XMR,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XPM,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XRP,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.XVC,
    CurrencyConversion_1.CurrencyConversionType.CRYPTO.ZEC
];
exports.DATA_SOURCE = {
    POLONIEX: "poloniex",
    BITTREX: "bittrex"
};
//# sourceMappingURL=common.js.map