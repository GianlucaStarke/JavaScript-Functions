const a = () => console.log('a');
const b = () => console.log('b');
const c = () => {
	setTimeout(a, 0);
	
	new Promise(resolve => resolve('b'))
		.then(resolve => console.log(resolve));
	
	console.log('c');
}
