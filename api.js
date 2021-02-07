// >>>>NOTE>>>>>> 
//code 200>sucess
// //code 404>mistake from client side, either invalidd url or send unnecessary data
// //code 500>internal server error

// let API_URL='https://www.fruitmap.org/api/trees'
// window.onload=function (){
// 	onGetFruits();
// };
// function onGetFruits() {
// 	document.getElementById('fruits').innerHTML=`<div style=text-align:center";>LOADING............</div>`;
// 	// body...
// 	fetch(API_URL, {
// 		method:'GET',
// 	})
// 	.then(
// 			response=>response.json())
// //convert reponse to json
// 	.then(
// 			data=>onDisplayData(data))
// 	.catch(function(error){
// 			document.getElementById('fruits').innerHTML=onGetErrorDiv();
// 			});
	
// 		}
// function onDisplayData(fruits)
// {
// 	let fruits_html='';
// 	fruits.forEach( function(value) {
// 		fruits_html=fruits_html+ 
// 		`<div style="border: 1px solid ${value.color}">
// 		${value.id} </br>
// 		${value.count} </br>
// 		${value.name}

// 		</div>`
// 		// statements
// 	});
// 	document.getElementById('fruits').innerHTML=fruits_html;

// }

// function onGetErrorDiv() //error handling strategy

// {
// 	return `<div>
// 	<div>womething wrong, try again</div>
// 	<button onclick='onGetFruits()'>Retry</button>
// 	</div>`
// }



// WORKING ON ANOTHER JS

// let API='http://newsapi.org/v2/everything?q=tesla&from=2021-01-07&sortBy=publishedAt&apiKey=48c519e4bcd756fd953e28ef0e55cef5';
// window.onload=function(){
// 	onGetNews();
// }

// function onGetNews(){
// 	fetch(API)
// 		.then( (response)=>response.json())
// 		.then((data)=>data.console.log(data))
// 		.catch ((error)=>console.log(error))

// }


//.....................MAP..............................


//calendar maa note and date save garna map use hunxa. map maa key and value rakhna sakinx.
//map maa key chai string number and bool rakhna painxa

// let map=new Map(); //create new map
// map.set('1','string one'); //set is used to sture the value by key. here key:1,value:'string one'
// map.set(1,'num one');
// map.set(true,'bool true');

//set multi value in a single line
// map.set(1,'num one')
// .set(true,'bool true');
//...........................or,

// let fruits=new Map([
// 	['mango','100'],
// 	['apple','200'],
// 	['banana','30'],

// ]);

//...............Or,
// let fruits.set('lemon','100');
// console.log(fruits); //dit not work


// console.log(map.get('1')); //returns value by key, returns undefined if key not exists 
// console.log(map.get(1));
// console.log(map.get(true));

// console.log(map.has(1));
// console.log('......');
//map.delete(1); //delete the value by key

// console.log(map.has(1));
//map.clear(); //clear everything from app
// console.log(map.has(1)); //returns true if key exists else return false
// console.log(map.size); //returns current element counts

//iteration and loop in MAP...............


// let fruitsMarket=new Map([
// 	['mango','100'],
// 	['apple','200'],
// 	['banana','30'],

// ]);


// for(let fruits of fruitsMarket.keys()){ //fetch keys
// 	console.log(fruits);
// }

// for(let fruitsPr of fruitsMarket.values()){ //fetch values
// 	console.log(fruitsPr);
// }

// console.log('keys and values');
// for(let keyval of fruitsMarket) //for keys and values both
// {
// 	// console.log(keyval); 
// 	//.............

// 	//fetch by index
// 	console.log(keyval[0]);
// 	// console.log(keyval[1]);

// }


//...........SET.............

//set is just like an array but,unique value matra linxa, same value 2 choti aauna hudaina, 
//it stores unique value only

// let set=new Set(); //create a new set

// let suresh={name:"sureshhhhhhhh"}; //set value
// let adhikari={name:"adhiakri"};
// let ram={name:"big ram"};

// set.add(suresh);
// set.add(adhikari);
// set.add(ram);
// console.log(set);

//add set another method
// let set1 =new Set();
// set1.add(1);
// set1.add(2);
// set1.add(3);
// set1.add('suresh');
// console.log(set1);
//using for loop in set\

// for(let user of set) 
// {
// 	console.log(user);
// }

// for(let user of set) 
// {
// 	console.log(user.name); //fetch value of key:name
// }

//using foreach 

// set.forEach(function(value){
// 	console.log(value);
// });

// let values=["ram","sita","hari","sita","krishna","ram","krishna"];
// function getUniqueVal(arr){
// 	return Array.from(new Set(arr));
// }
// alert(getUniqueVal(values)); //this returns unique value only because set always return unique value




//...................using pTag....creating html tag from javascript.......


// window.onload=function(){
// 	createElement();
// }

// function createElement(){
// 	let mainTag=document.getElementById('value');
// let pTag=document.createElement('p');
// let divTag=document.createElement('div');
//    pTag.innerText='this is p tag';
//    mainTag.appendChild(divTag);
//    divTag.appendChild(pTag);
// }



