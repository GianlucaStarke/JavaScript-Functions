/**
 * Returns a FormData with the data passed by parameters. If no parameter is given it will return an empty FormData.
 * @param {HTMLElement} form - form element with data(optional)
 * @param {object} data - object with data(optional)
 */
function createFormData({form = null, data = null}){
	if(form && typeof form !== 'object') throw new Error(`Invalid data type for form`)
	
	if(data && typeof data !== 'object') throw new Error(`Invalid data type for data`)
	
	// Create FormData
	const formData = form ? new FormData(form) : new FormData()
	
	// Append each data to FormData
	if(data) Object.entries(data).map(
		([key, value]) => formData.append(key, value)
	)
	
	// Return FormData
	return formData
}
