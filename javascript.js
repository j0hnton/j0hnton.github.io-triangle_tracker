function track() {
  var a =parseInt(document.getElementById('a').value);
  var b =parseInt(document.getElementById('b').value);
  var c =parseInt(document.getElementById('c').value);

  if (a+b>c&& b+c>a && a+c>b){
    if (a==b && b==c && a==c) {
      alert("This is an equillateral triangle")
    }
    else if (a!==b && b!=a && a!==c){
    alert("THIS IS A SCALENE TRIANGLE")
    }
    else{
      alert("THE TRIANGLE IS ISOSCELESS")
    }
  }
  else{
    alert("THIS IS NOT A TRIANGLE")
  }
  p{
    color:white;
    font-size:200;
  }
