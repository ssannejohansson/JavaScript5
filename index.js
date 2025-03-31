// Assignment 5

const account = {
    accountName: "Sanne Johansson",
    balance: 10000,
    getBalance: function () {
    
    },
    deposit: function () {

    },
    withdrawal: function () {

    },
    getAccountName: function () {

    }, 
    accountError: function () {

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
            alert(`You have ${account.getBalance} kr on your account`);
        case 2:
        case 3:
        case 4:
            alert(`This account belongs to ${account.accountName}.`);
        case 5: 
    }
}

atm()
