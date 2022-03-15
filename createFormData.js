// 1
function createFormData(formData, ...args){

	args.map(arg => {

		const keys = Object.keys(arg)
		const value = arg[keys[0]]
		formData.append(keys[0], value)
	})
	return formData
}

// 2
function createFormData(formData, data = {}){

	Object.entries(data).map(([key, value]) => {

		formData.append(key, value)
	})
	return formData
}

// 3
function createFormData({
	form: form,
	data: data
}){

	const formData = new FormData(form) || new FormData
	Object.entries(data).map(([key, value]) => {

		formData.append(key, value)
	})
	return formData
}