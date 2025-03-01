document.getElementById("addMoney-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const account = document.getElementById("account-number").value;
    const totalBalance = getInnerTextById("total-balance");
    const selectBank = document.getElementById("allBank").value;
    console.log(selectBank);
    
    if(amount<0){
    alert("only positive amount can be added")
    return;
    }

    if (account.length === 11) {
        if (pin === 1234) {
            const sum = totalBalance + amount
            getInnerTextByIdandValue("total-balance", sum);
            const container = document.getElementById("transaction-container");
            const div = document.createElement("div");
            div.classList.add("bg-white","font-semibold","w-[80%]","mx-auto", "rounded-xl","text-center", "my-4");
            div.innerHTML = `
            <h1>Added Money from ${selectBank}</h1>
            <h3>${amount} Tk</h3>
            <p>to account number ${account}</p>
            `
          container.appendChild(div); 



        } else {
            alert("Enter valid pin")
        }

    } else {
        console.log("not ok")
    }

})