const a = () => console.log('a');
const b = async () => 'b';
const c = async () => {
	setTimeout(a, 0);
	const consoleB = await b();
	console.log(consoleB);
	console.log('c');
}
