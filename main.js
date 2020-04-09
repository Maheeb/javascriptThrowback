// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title= 123;
// console.log(document.all);
// console.log(document.all[10]);
//
// let headerTitle = console.log(document.getElementById('header-title'));
// let header = document.getElementById('main-header')
// // console.log(headerTitle.innerText);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h4>Hello</h4>'
// header.style.color='blue';

// let items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent="Maheeb";
//
// for (let i=0; i<items.length;i++){
//
//     items[i].style.backgroundColor='green';
// }
// let items = document.getElementsByTagName('li');
// console.log(items[1]);
// items[1].textContent="Maheeb";
//
// for (let i=0; i<items.length;i++){
//
//     items[i].style.backgroundColor='yellow';
// }

// let input = document.querySelector('input');
// input.value="Hello world";

let titles = document.querySelectorAll('.title');
titles[0].textContent="Hello Maheeb";

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (let i =0; i<odd.length;i++){
    odd[i].style.backgroundColor='yellow';
    even[i].style.backgroundColor='green';

}