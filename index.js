// Assignment 5



const account = {
    accountName: "Sanne Johansson",
    balance: 10000,
    getBalance: function () {
        return `You have ${this.balance} kronor on your account.`;
    },
    deposit: function (depAmount) {
        let sum = account.balance + depAmount; 
        if (sum >= 0) {
            return sum; 
        } if (sum <= 0) {
            return alert(`Error. \nPlease enter a valid number.`);
        } else if (sum != [0-9]) {
            return alert(`Error. \nPlease enter a valid number.`);
        }
    },
    withdrawal: function (witAmount) {
        let sum = account.balance - witAmount; 
        if (sum >= 0) {
            return sum;
        } else if (witAmount > account.balance) {
            return alert(`Insufficient Funds.`); 
        } else if (sum != [0-9]) {
            return alert(`Error. \nPlese enter a number`); 
        }
    },
    getAccountName: function () {
        return `This account belongs to ${this.accountName}.`;

    },
    accountError: function () {
        return `Error. \nPlease enter a number between 1-5.`; 
    }
}



function atm() {
    const message = parseFloat (
        prompt(
            "Select a choice \n1. See balance \n2. Make a deposit \n3. Make a withdrawal \n4. Get account name \n5. Exit"
        )
    );
    

    switch (message) {
        case 1:
            alert(account.getBalance());
            break;
        case 2:
            let depAmount = parseFloat(prompt("Please enter the amount you want to deposit"));
            alert (`Deposit succeeded. \nYour balance is now ${account.deposit(depAmount)} kronor.`);
           
            break;
        case 3:
            let witAmount = parseFloat(prompt("Please enter the amount you want to withdraw"));
            alert (`Withdrawal suceeded. \nYour balance is now ${account.withdrawal(witAmount)} kronor.`);
            break;
        case 4:
            alert(account.getAccountName());
            break;
        case 5: 
            alert("See you next time!");
            break;
        default: 
            alert(account.accountError());
    }
}

atm();