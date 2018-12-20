function atm(withdrawalAmount, accountBalance) {
    var bankFee = 0.25;
    var totalWithdrawal = withdrawalAmount + bankFee;
    if (totalAllowance > totalWithdrawal && withdrawalAmount % 5 == 0) {
        var remainingBalance = accountBalance - totalWithdrawal;
        console.log("Account Balance: " + remainingBalance);
    } else {
        console.log("Account Balance: " + accountBalance);
    }
}

atm(25, 125)