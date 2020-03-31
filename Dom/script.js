
// //GETELEMENTBYID //
 
// var headerTitle = document.getElementById('main-header'); console.log(headerTitle);
//   headerTitle.textContent = 'Hello';
//     headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.outerHTML='<h3>Hello</h3>';
//  headerTitle.style.borderBottom = 'solid 3px #000';

// //GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
//  console.log(items);
//  console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = 'red';
// }

// //GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
//  console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// //Gives error
// items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// //QUERYSELECTOR //
//  var header = document.querySelector('#main-header');
//  console.log(header)
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//  //QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// //TRAVERSING THE DOM 
// var itemList=document.querySelectorAll('#firstul')
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// //lastChild
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// //nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// // events

var button= document.getElementById('enter');
var  input= document.getElementById('userinput');
var ul=document.querySelector("ul");

// button.addEventListener('dblclick', function(e){
//     console.log(e.type)
// })
// input.addEventListener('focus', function(e){
//     console.log(e.type)
// })
// input.addEventListener('blur', function(e){
//     console.log(e.type)
// })

button.addEventListener('click',function(e){
    //creating an element
    var li=document.createElement('li');
    // appending the child
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value='';
})

// input.addEventListener('keypress',function(event){
//     //creating an element
//     if(event.keyCode ===13){
//         var li=document.createElement('li');
//     // appending the child
//     li.appendChild(document.createTextNode(input.value))
//     ul.appendChild(li);
//     }
    
// })



