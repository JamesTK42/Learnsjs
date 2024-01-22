// Get today's date
let today = new Date();
let date = today.getDate() + "/" + (today.getMonth() + 1);

// If other (radio) selected, hide/make visible input text
function otherCheck() {
  if (document.getElementById("Other").checked) {
    document.getElementById("ifOther").style.visibility = "visible";
  } else document.getElementById("ifOther").style.visibility = "hidden";
}

function codingSignOff() {
  var items = document.getElementsByName("codesource");
  var selectedItems = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "checkbox" && items[i].checked == true)
      selectedItems += items[i].value + "/";
  }

  cdenm = selectedItems.slice(0, -1);



  if (document.getElementById("Other").checked) {
    var init = document.getElementById("ifOther").value;
  } else {
    var init = document.querySelector(
      'input[name="coders_initials"]:checked'
    ).value;
  }

  if (document.getElementById("dupe").checked){
var dupe = " " + document.querySelector(
  'input[name="duplicate"]:checked'
).value
  } else{var dupe = " ";}



  let finalSign = "Coded " + date + " " + cdenm + " " + init + dupe;

  // Prints coding sign off to html
  document.getElementById("signPrint").innerHTML = finalSign;

  // copy result to clipboard
  navigator.clipboard.writeText(finalSign);
  // alert("coppied to clipboard")
}

