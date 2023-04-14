const crypto = require("crypto-js");
const AES_TOKEN = process.env.REACT_APP_TOKEN_AES || "AES";

export const useAES = {
    encrypt: (data, key = AES_TOKEN) => {
        return crypto.AES.encrypt(JSON.stringify(data), key).toString();
    },
    decrypt: (string, key = AES_TOKEN) => {
        const result = crypto.AES.decrypt(string, key).toString(
            crypto.enc.Utf8
        );
        if (result) {
            return JSON.parse(result);
        } else {
            return result;
        }
    },
};
