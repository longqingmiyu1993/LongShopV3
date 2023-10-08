/**
 * auth:fylong
 * date:20210818
 * notes:建立一个数据加密的js，用于做前端加密用
 */
import CryptoJS from 'crypto-js/crypto-js'

/**
 * AES加密
 */
const KEY = CryptoJS.enc.Utf8.parse("1z2x3c4v5b6n7m89")
const IV = CryptoJS.enc.Utf8.parse("2qw34er56ty78ui9")

export function AesEncode(item){
    let key = KEY
    let iv = IV
    let srcs = CryptoJS.enc.Utf8.parse(item)
    var encrypted = CryptoJS.AES.encrypt(srcs,key,{
        iv:iv,
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    })

    return encrypted.toString()
}

/**
 * AES解密
 */
export function AesDecode(item){

    let key = KEY
    let iv = IV
    var hstr = CryptoJS.enc.Base64.parse(item)
    var b64str = CryptoJS.enc.Base64.stringify(hstr)
    var decrypted = CryptoJS.AES.decrypt(b64str,key,{
        iv: iv,
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    })

    return decrypted.toString(CryptoJS.enc.Utf8)

}
