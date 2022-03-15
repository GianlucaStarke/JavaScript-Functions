async function fetchAjax({
	url: url,
	method: method,
	form: form,
	data: data,
	dataType: dataType
}){

	try{

		const res = await fetch(url, {

			method: method,
			body: createFormData({
				form: form,
				data: data
			})
		})
		if(!res.ok){

			throw new Error(`HTTP ERROR: ${res.status}`)
		}
		const decripted_res = dataType == 'json'
			? await res.json()
			: (
				dataType == 'blob'
					? await res.blob()
					: (
						dataType == 'text'
							? await res.text()
							: res.json() || res.blob() || res.text() || function(){throw new Error('Data type not found')}
					)
			)
		return decripted_res || res

	}
	catch(rej){

		return rej
	}
}
