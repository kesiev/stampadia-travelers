let Tools=(function() {
    return {
        clone:(a)=>JSON.parse(JSON.stringify(a))
    }
})();

if (typeof module != "undefined")
    module.exports=Tools;