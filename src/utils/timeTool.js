/**
 * authur:fylong
 * Date:20210818
 * notes:一些时间上的相关功能，计时器，定时器，等等 
 */

/**
 * @延时装置sleep
 * @ms毫秒
 */
 export function sleep(ms){
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {
       continue
    }

}