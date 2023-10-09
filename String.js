//This file is reserved to treat, work on strings only

let fullname='othmen daghrour';
let email='othmen.daghrour@hotmail.com';
let numbers='0123456789';
let letters='abcdefghijklmnopqrstuvwxyz';
let operators='+-*/';


function _uppercase()
{
   let current_letter_reference=0;
   while(current_letter_reference < letters.length)
   {
    letters[current_letter_reference]=letters[current_letter_reference].toUpperCase()
    current_letter_reference++;
    console.log(letters[current_letter_reference].toUpperCase());
   }
   console.log(letters);
};

_uppercase();