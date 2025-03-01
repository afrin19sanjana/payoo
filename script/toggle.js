 document.getElementById("add-money-box").style.display = "block"
 document.getElementById("cashout-box").style.display = "none"
document.getElementById("addmoney").addEventListener("click", function(event){
    document.getElementById("add-money-box").style.display = "block"
      document.getElementById("cashout-box").style.display = "none"
})
document.getElementById("cashout").addEventListener("click", function(){
    document.getElementById("cashout-box").style.display = "block"
      document.getElementById("add-money-box").style.display = "none"
})