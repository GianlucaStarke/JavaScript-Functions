function criarFormData(formData, ...args){

	args.map(arg => {

		const keys = Object.keys(arg)
		const value = arg[keys[0]]
		formData.append(keys[0], value)
	})
	return formData
}
