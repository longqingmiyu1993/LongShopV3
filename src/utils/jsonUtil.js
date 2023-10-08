/**
 * auth:fylong
 * date:20210818
 * notes:主要是用来做json相关的一些操作处理
 */

import {AesEncode,AesDecode} from "../utils/dataSafe"


/**
 * 判断Json格式的字符串是否是JsonObj
 */
export function ifJsonObj(str){
    if(typeof str == 'string'){
        try {
            var obj=JSON.parse(str);
            if(typeof obj == 'object' && obj){
                return true;
            }else{
                return false;
            }
        } catch(e){
            //console.log(e)
            return false;
        }
    }
}

/**
 * 递归遍历Json形式的json文件，并且其改写并加密，
 * @参数：jsonObj,encodeType
 */
export function jsonObjEncode(jsonObj,encodeType){
    if(encodeType == "AES"){
        let jsonObject = {}
        for(let o in jsonObj){
            if(jsonObj[o] != null && jsonObj[o] != undefined){
                //判断是否是json形式，且不为空
                if(typeof jsonObj[o] == 'object' && jsonObj[o]){
                    jsonObject[o] = jsonObjEncode(jsonObj[o],"AES")
                }else{
                    jsonObject[o] = AesEncode(jsonObj[o])
                }
            }
        }
        return jsonObject
    }else{
        return jsonObj
    }
}

/**
 * 递归遍历Json形式的json文件，并且其改写并解密，
 * @参数：jsonObj,encodeType
 */
export function jsonObjDecode(jsonObj,decodeType){
    if(decodeType == "AES"){
        let jsonObject = {}
        for(let p in jsonObj){
            //判断是否是json形式，且不为空
            if(jsonObj[p] != null && jsonObj[p] != undefined){
                if(typeof jsonObj[p] == 'object' && jsonObj[p]){
                    jsonObject[p] = jsonObjDecode(jsonObj[p],"AES")
                }else{
                    console.log(jsonObj[p])
                    jsonObject[p] = AesDecode(jsonObj[p])
                }
            }
        }
        return jsonObject
    }else{
        return jsonObj
    }

}
