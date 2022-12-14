const billAmount = document.querySelector("#bill-amount");
const nextBtn = document.querySelector(".next-btn");
const nextPart = document.querySelector(".next-part");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


function clickHandler() {
  // hideMessage();
  const billAmt = Number(billAmount.value);
  const cashAmt = Number(cashGiven.value);
  // console.log(billAmt, cashAmt);
  if (billAmt && cashAmt) {
    validateBillAndCashAmount(billAmt, cashAmt);
  } else {
    showMessage("Please fill all the input field");
  }

}

function validateBillAndCashAmount(billAmt, cashAmt) {
  hideMessage();
  if (billAmt > 0) {
    if (billAmt <= cashAmt) {
      const amountToBeReturned = cashAmt - billAmt;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash amount should be greater or equal to the bill amount");
    }
  } else {
    showMessage("The bill amount should be greater than 0.");
  }
}

function calculateChange(amountToBeReturned) {
  const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = "** " + msg + " **";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function nextButtonClickHandler() {

  nextPart.classList.toggle("show-more");
  nextBtn.style.display = "none";

}
nextBtn.addEventListener("click", nextButtonClickHandler);

checkButton.addEventListener("click", clickHandler);