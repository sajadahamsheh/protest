//phone input filter  
// $("#phone").keyup(replaceChar = (e) => {
//     $("#phone").value = $("#phone").value.replace(/[a-z]|[\@\$\^\&\!\_\?\>\<\}\{\#\'\"\;]/gi, '');

// });

// $("#phone").keyup(function(e) {
//     $("#phone").value = $("#phone").value.replace(/[a-z]|[\@\$\^\&\!\_\?\>\<\}\{\#\'\"\;]/gi, '');

// });

// var a = document.querySelector("#phone");
// a.addEventListener("keyup", re = () => {
//     a.value = a.value.replace(/[a-z]|[\@\$\^\&\!\_\?\>\<\}\{\#\'\"\;\s]/gi, '');

// });

// var a = document.querySelector("#phone");
// a.addEventListener("keyup", re = () => {
//     a.value = a.value.replace(/[\D]/gi, '');

// });







// add event Listener for each save buttons to enable it 
// if the input is not valid 

// let btnEvent = document.querySelectorAll(".signupbtn");
// for (i in btnEvent) {

//     btnEvent[i].addEventListener("mouseover", sub = (e) => {
//         var items = document.querySelectorAll('input');​

//         // uname /email /phone /pass/pass 2/ date/checkbox 
//         var list = [];

//         for (var i = 0; i < items.length; i++) {
//             if (!(i == items.length - 1)) {
//                 let item = items[i].value;
//                 list.push(item.trim());
//             } else {
//                 list.push(items[i].checked);
//             }
//         }

//         var user = {
//             uname: '',
//             email: '',
//             phone: '',
//             password: '',
//             date: '',

//             validation: {
//                 uname: /^[\w]{1,12}\s[\w]{1,12}$/i.test(list[0]),
//                 email: /^[a-zA-Z]{2,9}\@[a-zA-Z]{2,9}[\d]?\.com$/gi.test(list[1]),
//                 phone: /^\d{3}\-?\d{4}\-?\d{3}$/gi.test(list[2]),
//                 password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/g.test(list[3]) && /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/g.test(list[4]) && list[3].toString() == list[4].toString(),
//                 date: parseInt(list[5].slice(0, 4)) < 2002 &&
//                     parseInt(list[5].slice(0, 4)) > 1950,

//                 checkbox = list[6]
//             }
//         };​​


//         ​
//         if (!(user.validation.uname && user.validation.phone && user.validation.email && user.validation.password && user.validation.checkbox)) {

//             alert("passssssssssssss")
//         } else {

//             alert('fooooooooooool')
//                 // document.getElementById("submit").style = "";
//                 // user.uname = list[0];
//                 // user.email = list[1];
//                 // user.phone = list[2];
//                 // user.password = list[3];
//                 // user.date = list[5];

//         }​


//     });

// }


// // btnEvent[i].style = "border-radius: 0.8rem; color: aliceblue;background-color: #999B2C; float: right; margin: 0.1rem;padding: 0.2rem;  width: 12rem; height: 3rem;  font-size: 1.4rem;";



// // password     123asdASD!@#

// // function sub() {

// // }

// // saveInSession()=>{};
// // saveInLocal()=>{};






// ​​

// // function store() {
// //     // var inputEmail = document.getElementById("id01");
// //     // localStorage.setItem("id01", inputEmail.value);
// // }
// // localStorage.setItem("lastname", "Smith");