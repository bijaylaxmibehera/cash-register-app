const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes")

const availableNotes=[2000,500,100,20,10,5,1];
checkButton.addEventListener("click", function validateBillAndCashAmt() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
       const amountToBeReturned=cashGiven.value-billAmount.value ;
       calculateChange(amountToBeReturned);
    } else {
      showMessage("The given cash should at least equal to the amount of bill. ")
    }

  } else {
    showMessage("Invalied bill amount");
  }

});

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = "** "+msg+" **";
  message.style.color="red";
}

function hideMessage() {
  message.style.display = "none";
}
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    var numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
    amountToBeReturned%=availableNotes[i];
    noOfNotes[i].innerText=numberOfNotes;
  }
}