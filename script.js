
// login Button Event Handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})


// deposit Button Event Handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {


    const depositNumber = getInput("depositAmount");


    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById('depositAmount').value = "";

})

// withdraw event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInput("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";


})

function getInput(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}

