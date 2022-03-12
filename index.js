console.log("(Write Your answer in Small Letters)")
console.log("for every correct answer you get 1 marks")
console.log("*************BEST OF LUCK************")
var readlineSync = require('readline-sync');
var Score =0;
function Play (question,Answer){
var username = readlineSync.question(question);
 

if(username==Answer )
{
  console.log ("yes ,You Are Right.")
  Score++;
  
}
else 
{
  console.log ( "sorry Bro, You are Wrong")
  
}
}
Play("(Q1): What's my full name ? ", "shubham belwal");
Play("(Q2): where do I live?", "tehri");
Play("(Q3): which sports Do I love most ? ","football");
Play("(Q4): which place do I like the most?(hill area/plane area): ","hill area");
Play("(Q5): what is my favourite color? ","red");
Play("(Q6): who is my Role model?","elon mask");
Play("(Q7): who is my dream company? ","Google");
Play("(Q8):) what's my dream car? ","lamborghini");
Play("(Q9): what's my favourite animal? ","dog");
Play("(Q10): what's my favourite item of clothing? ","shoes")
console.log("***Your Total Score out of 10 is****: ",Score)
