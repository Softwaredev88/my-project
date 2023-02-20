function bmiCalcu(){
    let weight = parseInt(document.getElementById('weight').value);
    let height = parseInt(document.getElementById('height').value);
    let output = document.getElementById('output').value;
    
    let b = weight / (height/100 * height/100);


    if(height < 100){
        alert('icorrect height input');
    }

  
    else{
   if(b <= 18.5){
       document.getElementById('output').innerHTML = b.toFixed(1) + " UNDERWEIGHT";
       document.getElementById('output').style.backgroundColor = "yellow";
       ///////////////////////////////////////////////////////////////////
       document.getElementById('height').value = '';
       document.getElementById('weight').value = '';

   }
   else if (b>=18.5 & b < 26){
    document.getElementById('output').innerHTML = b.toFixed(1) + " NORMAL";
    document.getElementById('output').style.backgroundColor = "green";
    ///////////////////////////////////////////////////////////////////
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
   }
   else if (b > 25 & b < 31){
    document.getElementById('output').innerHTML = b.toFixed(1)+ " OVERWEIGHT";
    document.getElementById('output').style.backgroundColor = "#FF4500";
    ///////////////////////////////////////////////////////////////////
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
   }
   else if (b > 30 & b < 36){
    document.getElementById('output').innerHTML = b.toFixed(1)+ " OBESE I";
    document.getElementById('output').style.backgroundColor = "red";
    ///////////////////////////////////////////////////////////////////
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
   }
   else if (b > 35 & b < 40){
    document.getElementById('output').innerHTML = b.toFixed(1)+ " OBESE II";
    document.getElementById('output').style.backgroundColor = "red";
    ///////////////////////////////////////////////////////////////////
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
   }
   else if (b >=40 ){
    document.getElementById('output').innerHTML = b.toFixed(1)  + " OBESE III";
    document.getElementById('output').style.backgroundColor = "red";
    ///////////////////////////////////////////////////////////////////
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
   }
 }
}   