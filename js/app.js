// chapter-21
// task-1
// var first=prompt('enter your first name : ')
// var last=prompt('enter your last name : ')
// var full_name= first + last

// alert('Greetings ' + full_name)


// task-2

// var phone=prompt('Enter your favourite Mobile Model : ')
// var x = phone.length
// document.write(x)

// task-3
// var x='Pakistani'
// var y= x.indexOf('n')
// document.write(y)


// task-4
// var check='Hello World'
// var y= check.lastIndexOf('l')
// document.write(y)

// task-5
// var x='Pakistani'
// var y= x.charAt(3)
// document.write(y)

// task-6
// var first=prompt('enter your first name : ')
// // var last=prompt('enter your last name : ')
// // var full_name= first + last

// alert('Greetings ' + full_name)

// task-7

// var x='Hyderabad'
// var y = x.replace('Hyder','Islam')
// document.write(y)

// task-8

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var rep=message.replace(/and/g,'&')
// document.write(rep)

// task-9
// var x=472
// var y=String(x)
// document.write('Value :' + x + '<br>' + 'Type :' + typeof(x) + '<br>' )
// document.write('Value :' + y + '<br>' +  'Type :' + typeof(y))

// task-10

// var x=prompt('Enter a string : ')
// var y=x.toUpperCase()
// document.write(y)

// task-11

// var x=prompt('Enter a string : ')
// var y=x.toLocaleUpperCase()
// document.write(y)


// task-12
// var x=35.36
// var y=String(x)
// var z=y.replace('.', "");
// document.write(z)


// task-13






























// task-18
// var x="the quick brown fox jumps over the lazy dog"

// var y = (x.match(/the /g) || []).length;

// document.write(y)
 



// chapter-31-34

// task-1
// var rightNow = new Date();
// document.write(rightNow)


// task-2

// var d = new Date(); 
// var currentMonth = d.getMonth();
// alert(currentMonth) 























// chapter 35-38

// task1

// function date(){
//     var rightNow = new Date();
//     document.write(rightNow)
// }

// date()



// task-2

// function Greet(first_name,last_name){
//     document.write('Greetings from SqSoft.com ' + first_name + last_name)
// }

// var a = prompt('First Name : ')
// var b = prompt('Last Name : ')
// Greet(a,b)





// task-3

function sum(a,b){
    document.write('Sum is : ' , a+b)
    
}


var a =Number( prompt('Enter one number to sum :'));
var b =Number( prompt('Enter other number to sum :'));


sum(a , b)


// task-4

// function calculator(x,y,z){
//     if (z==='+'){
//         document.write(x+y)
//     }
//     else if (z==='-'){
//         document.write(x-y)
    

//     }
//     else if (z==='*'){
//         document.write(x*y)
    

//     }
//     else if (z==='/'){
//         document.write(x/y)
    

//     }
//     else if (z==='%'){
//         document.write(x%y)
    

//     }


// }

// var x= Number (prompt('Ente first number : '))
// var y = Number (prompt('Enter second number :'))
// var z = prompt('what operation you want to : + , - ,* ,/ , % ')
// calculator(x,y,z)

// task-5

// function square(x){

//     document.write(x*x)
// }

// square(4)

// task-6




// task-7

// function counting(start,end){
//     for (start;start<=end;start++){
//         document.write(start)
//     }

// }


// var a =Number(prompt('Starting point : '))
// var b =Number(prompt('Ending point : '))
// counting(a,b)

// task-8

// function hypothense(){



// }


// task-9


// function area(width,height){

//     document.write(width*height)



// }


// // area(7,18)


// var width=Number(prompt('Enter width : '))
// var height=Number(prompt('Enter height : '))

// area(width,height)

// task-10

