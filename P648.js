/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(' ');
    sentence.forEach((item,index)=>{
        let min = 9999999;
        dictionary.forEach(ele=>{
            if(ele.length<min&&item.startsWith(ele)){
                sentence[index] = ele;
                min = ele.length
            }
        })
    })
    return sentence.join(' ');
};