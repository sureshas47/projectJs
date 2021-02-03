
// function myFunction (x, y) {
// 	return x*y;

// //	window.alert(2 + 3);
// 	// body... 
// }
// document.getElementById('1').innerHTML=(5, 3);

// function myfunct(){
// 	(document.write('hello'));
	// document.getElementById('').innerHTML="hello";

// }

//simple js variable .................................

//var is global scoped, let and const are block scoped

// var varVeriable="this is var veriable" ;
// let letVariable="this is let letVariable";
// const constVariable="this is const";

// console.log(window.varVeriable); //shows in global window object
// console.log(window.letVariable); //not shows in global window object
// console.log(letVariable); //shows in global window object
// console.log(constVariable); // shows in global window object
// console.log(window.constVariable); //not shows in global window object

//........................................................................

//simple js loop variable to the global window object

// for(let i=0;i<10;i++)
// {
// 	console.log(i);
// }
// console.log(i); //using let variable

// console.log(".......................");

// for(var i=0;i<10;i++)
// {
// 	console.log(i);
// }
// console.log(i); //using var variable

//........................................

// let a=true;
// let b=1;
// console.log(a==b); //it checks the value only - in boolean, 1 is true 0 is false
// console.log(".........")
// console.log(a===b); //it check the value and data types as well-strongly 

//using function with parameter
// function bookPublish(title, author)
// {
// 	this.title=title; //create scope
// 	this.author=author; 
// }
// let myBook=new bookPublish('got','suresh');
// console.log(myBook.title);
// console.log(myBook.author);
// console.log(myBook);

//using array

// let fruits=['mango', 'apple', 'banana']
// 	console.log(fruits);
// 	console.log(fruits.length); //shows length of array

//using pop array which remove last element
// let fruits=['mango', 'apple', 'banana']
// 	console.log(fruits);
// 	fruits.pop();
// 	console.log(fruits);
// 	console.log(fruits.length); //shows length of array

//using push in array which adds item in array
// let fruits=['mango', 'apple', 'banana']
// fruits.push('licchi','tomatto', 'aaru');
// 	console.log(fruits);

//..............change element in array by index(0,1,2)......................
// let fruits=['mango', 'apple', 'banana']
// console.log(fruits);
//fruits[2]='kiwi'; //this will change the element of index 2 to kiwi
//delete fruits[1]; //element of  will be removed but references will be still remain 

//fruits.splice(1, 2, 'f1','f2'); //1 denotes add element from mango, 2 denotes delete element of index 2
// console.log(fruits);

//array concat string
// let arr1=['suresh','adhikari'];
// let arr2=['bikash','subedi'];
// let arr3=['pankaj','dhakal'];
// let totarr=arr2.concat(arr1,arr3)
// console.log(totarr);

// let arr1=["1","1"];
// let arr2=["2","2"];
// let arr3=["3","3"];
// let totarr=arr2.concat(arr1,arr3)
// console.log(totarr);

// let fruits = ['apple', 'mango', 'lemon', 'gauva', 'pinaaple', 'f1', 'f2'];

// let newfruits=fruits.slice(2, 4); //from index of 2 will start print and from index of 4 will delete  

// console.log(newfruits);

//console.log(fruits.sort()); //accending order
//console.log(fruits.reverse()); //reverse order

//condition statement
// let a=1;
// if (a==1) {
// 	console.log('1');
// }
// else if (a==2){
// 	console.log('2');
// }
// else {
// 	console.log('none');
// }

//looping

// let a = 0;
// while (a<10) {
// 	console.log(a);
// 	a++;
// }
//..........................
//  let a=0;
// do 
// {
// 	console.log(a);
// 	a++;
// }
// while (a<10);
// .......................

// let person = {fname:"suresh", lname:"adhikari", age:"25"};
// let x;
// for (x in person)
// {
// 	console.log(x);
// 	console.log(person[x]);
// }


//using forEach loop..........................

// let person =['suresh','adhikari','chitwan'];
// person.forEach( function(value) {
// 	console.log(value);
// });

//using foreach to fetch index too
// let person=['suresh','adhikari','chitwan'];
// person.forEach( function(value, index) {
// 	console.log(value, index);
// 	// console.log(index);
// });


// function getDateResults()
// {
// 	let data=new Date();
// 	switch (data.getDay().toString()) {
// 		case '0': document.write("sunday");
// 			break;
// 		case '1': document.write("mon");
// 			break;
// 		case '2': document.write("tue");
// 			break;
// 		case '3': document.write("wed");
// 			break;
// 		case '4': document.write("thursday");
// 			break;
// 		case '5': document.write("friday");
// 			break;
// 		case '6': document.write("sat");
// 			break;
			
// 		default: document.write(".............");
		
// 	}

// }

// //events creting
// function clicked()
// {
// 	alert("you clicked");
// }


let My_NOTE = '_my_note'; //creating key to set item in local storage 
let eng_month=['jan','feb','march','april','may','jun','jul','aug',

'sept','oct','nov','dec']//create array for printing month as text instead of month in number
let my_multiple_notes=localStorage.getItem(My_NOTE)? //? is true >check value in localStorage,if value exist
//fetch value otherwise [] empty push (simple if else )
JSON.parse(localStorage.getItem(My_NOTE)):[];
 //array to save multiple value, and json stringify is used to set value as an string.
	window.onload=function (){
	onGetSavedNotes(my_multiple_notes); //this function called at first to show already created notes
};

function onAddToDo() {
	// body...
	let myNote=document.getElementById('notes').value; //capturing user input
	// console.log(myNote); 


//..............note...........mynotes.val/mynotes1 vaneko mynote vitrako value/mynotes ko pahilo index
	let note={}; //create new object
	note.value=myNote;
	note.date=new Date();
	note.id=new Date().getTime();
	my_multiple_notes.push(note); //push all notes to my_multiple_notes array
	//console.log( my_multiple_notes);
	//sessionStorage.setItem(My_NOTE, myNote); //create session storage and store data within browser
	localStorage.setItem(My_NOTE, JSON.stringify(my_multiple_notes)); //create local storage and store data within browser
	//it has 5 mb of capacity to store value and is url based-every url has different local storage 

	document.getElementById('notes').value=""; // this will clear the textarea after added
	onGetSavedNotes(my_multiple_notes);
}

function onGetSavedNotes(notes){
	//let notes=localStorage.getItem(My_NOTE); //fetch value from localStorage
	// let notes=my_multiple_notes; //bug fixing
	// document.getElementById('mynotes').innerText=notes;
	let my_notes_html='';
	
	// notes.forEach(function (val) {
		notes.reverse().forEach( function(val, index) {
			if (val) {
			my_notes_html=my_notes_html+ 
		`<div><p>${val.value}</p> 
				<p>${getUserReadableDate(val.date)}</p>
				<p>${val.id}</p>
				<div class="delete" onclick="deleteNote(`+index+`)" >Delete</>

				</div>`
				}
				
		});
		
//either above

		// '<div'+
		// '<p>'+val.value+'</p>'+
		// '<p>'+val.date+'</p>'+
		// '</div>'//print value as string
//or + to concat string 

	// console.log(notes);
	document.getElementById('myNotes').innerHTML=my_notes_html;

}
function getUserReadableDate(date)
{
	let readableDate=new Date(date);
	//print date as 11 nov 2019 10:30
	return readableDate.getDate()+'-'+eng_month[ readableDate.getMonth()]+
	'-'+readableDate.getFullYear()+' & '+readableDate.getHours()+':'
	+readableDate.getMinutes();

}
//pass index for deleting value
function deleteNote(index){
let alertMsg=confirm('do you want to delete selected note ?');
	if (alertMsg==true){
	
	delete my_multiple_notes[index];
	localStorage.setItem(My_NOTE, JSON.stringify(my_multiple_notes)); 
	onGetSavedNotes(my_multiple_notes);
}
else
{
	onGetSavedNotes(my_multiple_notes);
	
}
}

function onSearchItem(){

	let search_key=document.getElementById('searchText').value;
	newArray=my_multiple_notes.filter(note=>note.value.toLowerCase()==search_key.toLowerCase());
	//we can use ..indexOf to search by index
	onGetSavedNotes(newArray);
	console.log(my_multiple_notes);
}

function clearSearch()
{
	onGetSavedNotes(my_multiple_notes);
}




