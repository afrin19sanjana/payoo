document.getElementById("addMoney-btn").addEventListener("click", function(event){
    event.preventDefault();
   const addMoneyAmount = document.getElementById("amount").value;
   const convertedAnount = parseFloat(addMoneyAmount);
   const pin = document.getElementById("pinNumber").value;
   const convertedPin = parseInt(pin);
   const totalBalance = document.getElementById("total-balance").innerText;
   const convertedTotalBalance = parseFloat(totalBalance);
    if(convertedAnount && convertedPin){
        if(convertedPin === 1234){
            const sum = convertedTotalBalance+convertedAnount;
            document.getElementById("total-balance").innerText = sum;       
         }else{
            alert("enter valid pin")
         }
    }else{
       alert('Fill the amount')
    }

})