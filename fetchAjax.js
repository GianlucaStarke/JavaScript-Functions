// createFormData() is required

/**
 * JavaScript fetch with JQuery Ajax similiar syntax
 * @param {string} path - file path or url to fetch
 * @param {string} method - PHP method: GET(default) or POST
 * @param {FormData} formData - FormData for fetch's body(optional)
 * @param {HTMLElement} form - form element with datas for fetch's body(optional)
 * @param {object} data - datas for fetch's body(optional)
 * @param {string} dataType - response's data type: auto(default), json, blob or text
 */
async function fetchAjax({
	path: path,
	method: method,
	formData: formData,
	form: form,
	data: data,
	dataType: dataType
}){

	try{

		const res = await fetch(path, {

			method: method || 'GET',
			body: formData || createFormData({
				form: form,
				data: data
			})
		})
		if(!res.ok){

			throw new Error(`HTTP ERROR: ${res.status}`)
		}
		const decrypted_res =
			!dataType || dataType == 'auto'
				? res.json() || res.blob() || res.text() || 'detect fail'
				:(
					dataType == 'json'
						? await res.json()
						: (
							dataType == 'blob'
								? await res.blob()
								: (
									dataType == 'text'
										? await res.text()
										: 'decrypt fail'
								)
						)
				)
		if(decrypted_res == 'detect fail'){
		
			throw new Error('Failed to detect data type')
		}
		else if(decrypted_res == 'decrypt fail'){
		
			throw new Error(`Data type ${dataType} couldn't be decrypted`)
		}
		else{
			
			return decrypted_res
		}
	}
	catch(rej){

		console.error(rej)
		return rej
	}
}
