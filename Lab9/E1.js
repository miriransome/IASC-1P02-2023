var start = new Date();

function stoptime(){
  var stop = new Date();
  var difference = ((stop.getTime() - start.getTime())/600);
  alert("You have been on this page for: "+ difference +" seconds!");
}
