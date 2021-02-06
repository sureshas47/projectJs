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

// let API='https://ip.city/api.php?ip=[IP]&key=75af374ceb744507ae8401a2dc240035';
// window.onload=function(){
// 	onGetNews();
// }

// function onGetNews(){
// 	fetch(API)
// 		.then( (response)=>response.json())
// 		.then((data)=>data.console.log(data))
// 		.catch ((error)=>console.log(error))

// }


//...................................................



