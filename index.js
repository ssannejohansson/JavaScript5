// Assignment 5




const account = {
    accountName: "Sanne Johansson",
    balance: 10000,
    getBalance: function () {
        return `You have ${this.balance} kronor on your account.`;
    },
    deposit: function (depAmount) {
        if (depAmount > 0) {
        let sum = account.balance + depAmount;  
        return sum;
        }
    },
    withdrawal: function (witAmount) {
        if (witAmount > account.balance) {
            return alert(`Insufficient Funds.`); 
        } else if (witAmount > 0) {
            let sum = account.balance - witAmount;  
            return sum;
            }
    },
    getAccountName: function () {
        return `This account belongs to ${this.accountName}.`;

    },
    accountError: function () {
        return `Error. Please enter a number between 1-5.`; 
    }
}



function atm() {
    const message = parseFloat (
        prompt(
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );
    

    switch (message) {
        case 1:
            alert(account.getBalance());
            break;
        case 2:
            let depAmount = parseFloat(prompt("Please enter the amount you want to deposit"));
            alert (`Deposit succeeded. Your balance is now ${account.deposit(depAmount)} kronor.`); 
            break;
        case 3:
            let witAmount = parseFloat(prompt("Please enter the amount you want to withdraw"));
            alert (`Withdrawal suceeded. Your balance is now ${account.withdrawal(witAmount)} kronor.`);
            break;
        case 4:
            alert(account.getAccountName());
            break;
        case 5: 
            alert("Welcome back!");
        default: 
            alert(account.accountError());
    }
}

atm(); 
