document.getElementById("withdraw-btn").addEventListener("click", function(event){
    event.preventDefault();
 const cashoutPin = document.getElementById("cashout-pinNumber").value;
 const convertedCashoutPin = parseInt(cashoutPin);
 const cashoutAmount =document.getElementById("cashout-amount").value;
 const convertedCashoutAmount = parseFloat(cashoutAmount);
 const totalBalance = document.getElementById("total-balance").innerText;
 const convertedTotalBalance = parseFloat(totalBalance);
 if(convertedCashoutAmount && convertedCashoutPin){
  if(convertedCashoutPin === 1234){
   const sum = convertedTotalBalance - convertedCashoutAmount
   document.getElementById("total-balance").innerText = sum;
   
  }else{
    alert("pin not valid")
  }
 }else{
    alert("Fill the amount")
 }
    
})