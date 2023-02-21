let output = document.getElementById('numOflet');
let output2 = document.getElementById('numOfwor');
let output3 = document.getElementById('numOfrea');
let output4 = document.getElementById('letterRea');



let words = document.getElementById('word').value;
const numOfWords =  words.split(' ');
let i = 0;

function calcWletter(){
  let words = document.getElementById('word').value;
  document.getElementById('word').style.color = 'red';
  output.innerHTML = "The Number Of Leters is : " + words.length;
  const numOfWords =  words.split(' ');
  output2.innerHTML = "The Number Of Words is : " + numOfWords.length;
};



function calcLetters(){
  let inp = document.getElementById('letter').value;
  const WordsNum =  document.getElementById('word').value.split(' ');
  for(let x in WordsNum){
    if(inp == WordsNum[x]){
      i = i + 1;
      output4.innerHTML = "this WORD repeated " +  i + " times ";
    }
  }
  i=0;
};