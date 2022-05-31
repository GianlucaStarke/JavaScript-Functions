const a = () => console.log('a');
const b = async () => console.log('b');
const c = async () => {
	setTimeout(a, 0);
	await b();
	console.log('c');
}
