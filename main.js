function getResult() {
  //clear to rerun
  $("#hasil").empty();

  //For loop sejumlah x
  var xval = $('#xval').val(); 
  for (let i = 1; i <= xval; i++) {
    $("#hasil").append('<li>'+divcurrent(i)+'</li>');
  }
}

function divcurrent(val){
  //Check modulo 3 dan 5
  var result = "";
  if (val%3 == 0){
    result = result.concat("Tiga");
  } 
  
  if (val%5 == 0){
    result = result.concat("Lima");
  }

  if (result == "") {
    result = val;
  }

  return result;
}
