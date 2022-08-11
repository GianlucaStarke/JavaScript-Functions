function loopIndex(index, array){
	return (
		index > array.length - 1 
		? loopIndex(index - array.length, array)
		: index
	)
}
