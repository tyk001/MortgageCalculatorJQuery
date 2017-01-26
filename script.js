$(document).ready(function() {
    $("#submitButton").click(function() {
        var loanBalValue = $('#loanBal').val();
        var interestRateValue = $('#interestRate').val();
        var loanTermValue = $('#loanTerm').val();
        var periodValue = $('#period option:selected').val();
        if (loanBalValue == '' || interestRateValue == '' || loanTermValue == '') {
            alert("Please Fill Out All of the Fields");
        }
        calcAll(loanBalValue, interestRateValue, loanTermValue, periodValue);
    });
});


function calcAll(loanBalValue, interestRateValue, loanTermValue, periodValue) {
    // monthly interest rate
    var monthlyInterestRate = (interestRateValue / 100) / periodValue

    // number of payments
    var numberOfPayments = loanTermValue * periodValue;

    // compounded interest rate
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

    // interest quotient
    var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation
    var monthlyPayment = loanBalValue * interestQuotient;

    displayCalc(monthlyPayment);
}


function displayCalc(monthlyPayment) {
    monthlyPayment = (monthlyPayment).toFixed(2)
    $('body').append('<p>Your monthly payment will be $' + monthlyPayment + '.');
}
