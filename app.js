

// var  str = "wOrd"
// var  test = "WoRd"
// signMatch = false;
// for (var i = 0; i < test.length; i++) {
//     if (test[i].toLowerCase() == str[i].toLowerCase()) {
//         signMatch = true;
//     } else {
//         signMatch = false;
//         break;
//     }
// } 
// console.log (signMatch);


// var  str = "Orsg,jawsdfklghasfjklghd";
// var  findSimbol = "O";

// console.log(str.indexOf(findSimbol));


// var test = "Lorem ipsum dolor, sit amet consectetur"
// console.log (test.substring(2, -15));

// console.log (test.substr(5, 10));

// console.log (test.slice(2, -15));

// var test = "Lorem ipsum dolor, sit amet consectetur"
// var test = test.substr(0,3);
// var i = 0;
// while (i < test.length)  {
//     console.log (i);
//     i++;
// }

//
 
// var i = 0;
// do {
//     console.log (i);
//     i++;
// } while (i < test.length);


// var counter = 5;

// var arr= [2,5,90,11,6,5,6]
// arr.push (3)
// arr.pop();
// arr.unshift (18);

// arr.slice(1,5)



// unshift

// var x= 20

// var temp_arr =  [];
// for (var i = 1; i < arr.length; i++) {
//     temp_arr.push(arr[i]);
// }

// var arr2 = [35, 36, 37]

// for  (var i = 0; i < arr2.length; i++) {
//     arr.push(arr2[i]);
// }




var test = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur nesciunt sint, vitae enim facilis!";


var arr = test.trim().split(" ").slice(0,10).join(" ") + "...";



function prepareTextDisplay(articleText) {
    console.log (articleText.trim().split(" ").slice(0,10).join(" ") + "[...]");
}
prepareTextDisplay(test);





