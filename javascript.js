function  tracker(){

  var lengthA=parseInt(document.getElementById("a").value);
  var lengthB=parseInt(document.getElementById("b").value);
  var lengthC=parseInt(document.getElementById("c").value);
  var triangle=[lengthA,lengthB,lengthC];
  var type=["EQUILATERAL","ISOSCELES","SCALENE","NOT A TRIANGLE"]


 if(triangle[0]===triangle[1] && triangle[1]===triangle[2] && triangle[2]===triangle[0]){
    var showOne="The triangle is" + " " + type[0];
    document.getElementById("trackOutput").innerHTML=showOne;
  }
  else if(triangle[0]===triangle[1] || triangle[2]===triangle[0] || triangle[1]===triangle[2]){
    var showTwo="The triangle is" + " " + type[1];
    document.getElementById("trackOutput").innerHTML=showTwo;
  }
  else if(triangle[0]!==triangle[1] && triangle[1]!==triangle[2] && triangle[0]!==triangle[2]){
    var showThree="The triangle is" + " " + type[2];
    document.getElementById("trackOutput").innerHTML=showThree;
  }
  else
   alert("CANNOT FORM A TRIANGLE! TRY AGAIN");
 }
