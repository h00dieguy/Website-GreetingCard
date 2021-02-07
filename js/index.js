function getData(){
var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
var userText = document.getElementById("userText").value;


 localStorage.setItem("txtValue", from);
 localStorage.setItem("txtValue1", to);
 localStorage.setItem("txtValue2", userText);

var occation= document.getElementById("occation").value;


if (from == "") {
  alert("Please fill all fields!");
}
else if (to =="") {
  alert("Please fill all fields!");
}
else if (userText =="") {
  alert("Please fill all fields!");
}
else if (occation == "") {
  alert("Please select Occasion!");
}

else {

        if (occation=="birthday") {
          window.location = "birthday.html";
        }
        else if (occation=="diwali"){
          window.location = 'diwali.html';
        }
	else if (occation=="christmas"){
          window.location = 'christmas.html';
        }
	else if (occation=="eid"){
          window.location = 'eid.html';
        }
	else if (occation=="ganeshchaturthi"){
          window.location = 'ganeshchaturthi.html';
        }
	else if (occation=="gudhipadva"){
          window.location = 'gudhipadva.html';
        }
	else if (occation=="holi"){
          window.location = 'holi.html';
        }
	else if (occation=="independence"){
          window.location = 'independence.html';
        }
	else if (occation=="navratri"){
          window.location = 'navratri.html';
        }
	else if (occation=="newyear"){
          window.location = 'newyear.html';
        }
	else if (occation=="rakshabandhan"){
          window.location = 'rakshabandhan.html';
        }
	else if (occation=="republic"){
          window.location = 'republic.html';
        }
	else if (occation=="valentine"){
          window.location = 'valentine.html';
        }
        else {
          window.location = 'none' ;
        }

}



}
