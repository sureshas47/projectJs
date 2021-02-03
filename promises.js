
let isCall=false;
function promiseExample() {

	return new Promise(
	function (resolve,reject) { //we create executor function 
		setInterval(function(){
			if (isCall) {
			resolve('promise success')
			} 
			else{
			reject('promise fail')
			}
		}, 1000)
		
	}
	)

}
	function callPromise() {
		promiseExample().then(function(value) {
			console.log(value);
		}).catch(function(error){
			console.log(error);
		});
		
	} 

	function filter(){
		const fruits=
		['apple','orange','banana','appjuice','orjuice','banshake','realfruits','madeflabour'];
		const result=fruits.filter(newfruits=>newfruits.length>7); 
		//we apply filter to an array>array maa search garna paryo vanee filter use garinxa 
		console.log(result);
	}
	
	function filterEx(){
		let array=[
		{id:13},
		{id:14},
		{id:19},
		{id:18},
		{id:16}
		];
		let newarray=array.filter(filterByNumber);
		console.log(newarray);
	}

	function filterByNumber(item){
		if (item.id>16) {
			return true;
		}
		else
		{
			false;
		}
	}