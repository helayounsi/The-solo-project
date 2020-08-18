// tabbed menu



function Nature(evt, menu) {
  var  tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menu).style.display = "block";
  evt.currentTarget.className += " active";
}


//price display


$('#getPrineButton').on('click', function(){
  var value=$('#b').val();
  console.log(value);
 $('#output').text(value*20);
})


function myFunction() {
  location.replace("Purchase.html")
}       
 
