document.getElementById("cashout-box").style.display = "none"
document.getElementById("transaction-box").style.display = "none"
document.getElementById("addmoney").addEventListener("click", function(event){
   handleToggle("add-money-box", "block")
   handleToggle("cashout-box", "none")
   handleToggle("transaction-box", "none")
})
document.getElementById("cashout").addEventListener("click", function(){
    handleToggle("cashout-box", "block")
    handleToggle("add-money-box", "none")
    handleToggle("transaction-box", "none")
})