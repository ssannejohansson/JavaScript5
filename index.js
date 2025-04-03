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
            return alert(`Deposit succeeded. \nYour balance is now ${sum} kronor.`); 
        } else if (sum != [0-9]) {
            return alert("Error. \nPlease enter a number."); 
        }
    },
    withdrawal: function (witAmount) {
        let sum = account.balance - witAmount; 
        if (sum >= 0) {
            return alert (`Withdrawal succeeded. \nYour balance is now ${sum} kronor.`);
        } else if (witAmount > account.balance) {
            return alert("Error. \nInsufficient Funds."); 
        } else if (sum != [0-9]) {
            return alert("Error. \nPlease enter a number."); 
        }
    },
    getAccountName: function () {
        return `This account belongs to ${this.accountName}.`;

    },
    accountError: function (errAnswer) {
        errAnswer = prompt("Error. Do you wish to try again? \nType yes to return to menu and no to exit."); 
        if (answer.includes("yes")) {
            return atm(); 
        } else if (answer.includes("no")) {
            return alert("See you next time!"); 
        }
    },
    return: function (retAnswer) {
        retAnswer = prompt("Do you wish to return to the menu?\nType yes to return and no to exit.")
        if (retAnswer.includes("yes")) {
            return atm(); 
        } else if (retAnswer.includes("no")) {
            return alert("See you next time!"); 
        }
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
            alert(account.getBalance())+(account.return());
            break;
        case 2:
            let depAmount = parseFloat(prompt("Please enter the amount you want to deposit"));
            return (account.deposit(depAmount))+(account.return());
        case 3:
            let witAmount = parseFloat(prompt("Please enter the amount you want to withdraw"));
            return (account.withdrawal(witAmount))+(account.return());
        case 4:
            alert(account.getAccountName())+(account.return());
            break;
        case 5: 
            alert("See you next time!");
            break;
        default: 
            alert(account.accountError());
    }
}

atm();