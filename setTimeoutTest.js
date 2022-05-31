const a = () => console.log('a');
const b = async () => setTimeout(() => 'b', 1000);
const c = async () => {
	setTimeout(a, 0);
	console.log(await b());
	console.log('c');
}
