document.getElementById("transaction").addEventListener("click", function(event){
    event.preventDefault();
   
    
    handleToggle("add-money-box", "none");
    handleToggle("cashout-box", "none");
    handleToggle("transaction-box", "block")
})