function  tracker(){

  var lengthA=parseInt(document.getElementById("a").value);
  var lengthB=parseInt(document.getElementById("b").value);
  var lengthC=parseInt(document.getElementById("c").value);
  var triangle=[lengthA,lengthB,lengthC];

if(triangle[0]+triangle[1]>triangle[2] || triangle[0]+triangle[2]>triangle[1] || triangle[2]+triangle[1]>triangle [0]){
 if(triangle[0]===triangle[1] && triangle[1]===triangle[2]  && triangle[0]===triangle[2]){

    document.getElementById("result").innerHTML='EQUILATERAL';
  }

  else if(triangle[0]!== triangle[1] && triangle [0]!== triangle[2] &&  triangle[1]!== triangle[2]){

    document.getElementById("result").innerHTML='SCALENE';
  }



  else {
      document.getElementById("result").innerHTML='ISOSCELES';
    }
  }

  else {
      document.getElementById("result").innerHTML="NOT A TRIANGLE";
}
}
