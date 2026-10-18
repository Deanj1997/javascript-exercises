const palindromes = function(pal) {
const stripped = pal
    .replace(/\s/g, '')
    .replace(/,/g,'')
    .replace(".",'')
    .replace(/!/g,'')
    .toLowerCase();

const reverse = stripped
.split("")
.reverse()
.join("");

if(stripped === reverse){
    return true;
}
else{
    return false;
}
// remove spaces 
// split in half 
// reverse second string 
// remove middle value if odd length
};

// Do not edit below this line
module.exports = palindromes;
