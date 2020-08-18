// tabbed menu

function Nature(evt, menu) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menu).style.display = "block";
  evt.currentTarget.className += " active";
}


//price

 
function myFunction() {
  var x = document.createElement("OUTPUT");
  x.setAttribute("name", "x");
  x.setAttribute("for", "a b");
  document.getElementById("myForm").appendChild(x);
}