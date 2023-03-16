function changeIcon(){
    let symbol = document.getElementById('crypto-select').value;
    if (symbol == "btc"){
        document.getElementById("cryptoIcon").src="img/BTC.png";
    }else if (symbol == "eth"){
        document.getElementById("cryptoIcon").src="img/ETH.png";
    }else if (symbol == "xmr"){
        document.getElementById("cryptoIcon").src="img/XMR.png";
    }
}
document.getElementById('crypto-select').addEventListener('DOMContentReloaded', function(){
    alert(document.getElementById('crypto-select').value);
    document.getElementById('crypto-select').value = "btc";
});
document.getElementById('crypto-select').addEventListener('click', changeIcon);