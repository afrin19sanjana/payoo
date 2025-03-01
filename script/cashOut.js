document.getElementById("withdraw-btn").addEventListener("click", function(event){
 event.preventDefault();
 const amount = getInputValueById("cashout-amount");
 const pin = getInputValueById("cashout-pinNumber");
 const account = document.getElementById("cashout-account-number").value ;
 const totalBalance = getInnerTextById("total-balance");
 if(amount>totalBalance){
    alert("amount limit exceed");
    return;
 }
 if(account.length === 11){
    if(pin === 1234){
     const sum = totalBalance-amount
     getInnerTextByIdandValue("total-balance", sum);
     const container = document.getElementById("transaction-container");
     const p = document.createElement("p");
     p.innerText =`
     withdrawn ${amount} from ${account} account
     `
     container.appendChild(p);
     
    }else{
  alert("Enter valid pin")
    }

 }else{
  alert("Account Number not valid");
 }
})