/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let result = "";
    let xStr = String(x).trim();
    
    for(let i = 0; i < xStr.length; i++){
        if(xStr[0] == "-"){
            if(i == 0){
                result += "-"
            }else{
                result += xStr[xStr.length - i];
            }
            
        }else{
            result += xStr[xStr.length - (i + 1)];
        }
    }
    
    if(Number(result) > (Math.pow(2, 31) - 1) || Number(result) < (Math.pow(-2, 31) + 1)){
       result = 0;
    }else{
        result = Number(result);
    }
    
    return result;
    
};
