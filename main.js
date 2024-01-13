// Get today's date
let today = new Date();
let date = today.getDate() + '/' + (today.getMonth()+1);


// Print the message and the date
function codingSignOff() {
    var items=document.getElementsByName('codesource');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox' && items[i].checked==true)
            selectedItems+=items[i].value+"/";
    }




// var init = document.getElementById("signInit").value;
var init = document.querySelector('input[name="coders_initials"]:checked').value;

// var codesource = document.querySelector('input[name="codesource"]:checked').value;

let finalSign = ("coded " + date + " " + selectedItems + " " + init);

document.getElementById("signPrint").innerHTML = finalSign;


}

