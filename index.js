
const transform = function(input) {
	for(let key of Object.keys(input)) {
		try {
			let val = JSON.parse(input[key])
			if(typeof val != 'string') {
				input[key] = val
			}
		}
		catch(e) {}
	}
	
	return input
}

module.exports = transform