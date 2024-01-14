// Get today's date
let today = new Date();
let date = today.getDate() + '/' + (today.getMonth()+1);


// Print the message and the date
function codingSignOff() {
    var items=document.getElementsByName('codesource');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox' && items[i].checked==true)
            selectedItems+=items[i].value + "/";
    }

cdenm = selectedItems.slice(0,-1);

var init = document.querySelector('input[name="coders_initials"]:checked').value;


let finalSign = ("coded " + date + " " + cdenm + " " + init);
// somehow add - "/" to remove / from end
document.getElementById("signPrint").innerHTML = finalSign;


}

