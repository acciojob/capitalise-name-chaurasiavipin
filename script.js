//your JS code here. If required.
function changeIntoUpper(str){
let store=""
	for(let i of str){
		if(str[i]>='a' && str[i]<='z' || str[i]>="A" && str[i]<='Z'){
			store=store+str[i]
			store=store.toUpperCase()
		}
		
	}
	return store
}