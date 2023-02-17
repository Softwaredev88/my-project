const of = [0,1,2,3,4];
const sn = [5,6,7,8,9];
const numbers = [0,1,2,3,4,5,6,7,8,9];

//array index number
let a = parseInt(Math.random()*6);
let b = parseInt(Math.random()*6);
let c = parseInt(Math.random()*10);
let d = parseInt(Math.random()*10);


//to fit array index
if(a>0){
    a--;
}
if(b>0){
    b--;
}


let x = numbers[c] + sn[b];
//console.log("x is " , x ,of[a] , sn[b] , numbers[c] , numbers[d]);


    let i = 0;

    function changeNumbers(){
        if(x>=6){
            a = parseInt(Math.random()*3);
            b = parseInt(Math.random()*3)
            c = parseInt(Math.random()*3);
            d = parseInt(Math.random()*3);
            document.getElementById("outputA").innerHTML="A = " + of[a];
            document.getElementById("outputB").innerHTML="B = " + sn[b];
            document.getElementById("outputC").innerHTML="C = " + numbers[c];
            document.getElementById("outputD").innerHTML="D = " + numbers[d];
            //console.log(of[a] , sn[b] ,numbers[c] , numbers[d]);
            document.getElementById("inp1").value = '';
            document.getElementById("inp2").value = '';
            document.getElementById("inp3").value = '';
            document.getElementById("inp4").value = '';
            document.getElementById("inp5").value = '';
            document.getElementById("inp6").value = '';
            document.getElementById("inp7").value = '';
        }
        else{
            document.getElementById("outputA").innerHTML="A = " + of[a];
            document.getElementById("outputB").innerHTML="B = " + sn[b];
            document.getElementById("outputC").innerHTML="C = " + numbers[c];
            document.getElementById("outputD").innerHTML="D = " + numbers[d];
            /////////////////////////////////////////////////////////////////
            document.getElementById("inp1").value = '';
            document.getElementById("inp2").value = '';
            document.getElementById("inp3").value = '';
            document.getElementById("inp4").value = '';
            document.getElementById("inp5").value = '';
            document.getElementById("inp6").value = '';
            document.getElementById("inp7").value = '';
        }
    }

    
    function next(){
        if(document.getElementById("inp1").value != '' && document.getElementById("inp2").value != ''){
    if(i<100){
      i = i + 1;
      document.getElementById("points").innerHTML= i + "/100"; 
    }
    let x = parseInt(Math.random()*6);
    let y = parseInt(Math.random()*6);
    let z = parseInt(Math.random()*10);
    let v = parseInt(Math.random()*10);
    if(x>0){
        x--;
    }
    if(y>0){
        y--;
    }
    document.getElementById("outputA").innerHTML="A = " + of[x];
    document.getElementById("outputB").innerHTML="B = " + sn[y];
    document.getElementById("outputC").innerHTML="C = " + numbers[z];
    document.getElementById("outputD").innerHTML="D = " + numbers[v];
    //console.log(i);
    document.getElementById("inp1").value = '';
    document.getElementById("inp2").value = '';
    document.getElementById("inp3").value = '';
    document.getElementById("inp4").value = '';
    document.getElementById("inp5").value = '';
    document.getElementById("inp6").value = '';
    document.getElementById("inp7").value = '';
    changeNumbers(i);    
    console.log(i);
}
    }


    function startGame(){
        let m = 0;
        m++;
        if(m<=1){
        if(x>=6){
            a = parseInt(Math.random()*3);
            c = parseInt(Math.random()*3);
            d = parseInt(Math.random()*3);
            document.getElementById("outputA").innerHTML="A = " + of[a];
            document.getElementById("outputB").innerHTML="B = " + sn[b];
            document.getElementById("outputC").innerHTML="C = " + numbers[c];
            document.getElementById("outputD").innerHTML="D = " + numbers[d];
            //console.log(of[a] , sn[b] ,numbers[c] , numbers[d]);
        }
        else{
            document.getElementById("outputA").innerHTML="A = " + of[a];
            document.getElementById("outputB").innerHTML="B = " + sn[b];
            document.getElementById("outputC").innerHTML="C = " + numbers[c];
            document.getElementById("outputD").innerHTML="D = " + numbers[d];
        }
        document.getElementById("wel").style.display="block";
    }
   }



    function checkValidation(){
        let equ1 = 0;
        let equ2 = 0;
        let totalEqu;
        var one = parseInt(document.getElementById("inp1").value);
        var two = document.getElementById("inp2").value;
        var three = parseInt(document.getElementById("inp3").value);
        var four = document.getElementById("inp4").value;
        var five = parseInt(document.getElementById("inp5").value);
        var six = document.getElementById("inp6").value;
        var seven = parseInt(document.getElementById("inp7").value);
        if(document.getElementById("inp1").value != '' && document.getElementById("inp2").value != ''){
        if(two == '+'){
           equ1 = one + three;
        }
        if(two == '*'){
            equ1 = one * three;
        }
        if(two == '/'){
            equ1 = one/three;
        }
        if(two == '-'){
            equ1 = one-three;
        }
        if(six == '+'){
            equ2 = five + seven;
        }
        if(six == '-'){
            equ2 = five - seven;
        }
        if(six == '*'){
            equ2 = five * seven;
        }
        if(six == '/'){
            equ2 = five / seven;
        }

        if(four=='+'){
            totalEqu = equ1 + equ2
            document.getElementById("checkRes").innerHTML = totalEqu;
        }
        if(four=='-'){
            totalEqu = equ1 - equ2
            document.getElementById("checkRes").innerHTML = totalEqu;
        }
        if(four=='*'){
            totalEqu = equ1 * equ2
            document.getElementById("checkRes").innerHTML = totalEqu;
        }
        if(four=='/'){
            totalEqu = equ1 / equ2
            document.getElementById("checkRes").innerHTML = totalEqu;
        }
    }
}

    /*function nullBoxes(){
        if(document.getElementById("inp1").value != ''){
            document.getElementById("inp1").style.backgroundColor='rgb(227, 101, 111)';
            document.getElementById("inp2").style.backgroundColor='red';
            document.getElementById("inp3").style.backgroundColor='red';
            document.getElementById("inp4").style.backgroundColor='red';
            document.getElementById("inp5").style.backgroundColor='red';
            document.getElementById("inp6").style.backgroundColor='red';
            document.getElementById("inp7").style.backgroundColor='red';
        }
    }*/