/**
 * Returns a FormData with the data passed by parameters. If no parameter is given it will return an empty FormData.
 * @param {HTMLElement} form - form element with data(optional)
 * @param {object} data - object with data(optional)
 */
function createFormData({
	form: form,
	data: data
}){
	
	const formData = new FormData(form) || new FormData
	Object.entries(data).map(([key, value]) => formData.append(key, value))
	return formData
}
