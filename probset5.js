var vowelCount = function(str){
	var strArray = str.split("")
	var vowelCounter = 0
	for(var i=0; i<strArray.length; i++){
		if(strArray[i] === "a" || strArray[i] === "A" || strArray[i] === "e" || strArray[i] === "E" || strArray[i] === "i" || strArray[i] === "I" || strArray[i] === "o" || strArray[i] === "O" || strArray[i] === "u" || strArray[i] === "U"){
			vowelCounter++
		}
	}
	console.log(vowelCounter)
}

var alphabetSoup = function(str){
	var strArray = str.split("")
	console.log(strArray.sort().join())
}