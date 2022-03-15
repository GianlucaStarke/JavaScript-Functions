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
			body: createFormData(
				form ? new FormData(form) : new FormData(),
				() => {
				
					return Object.entries(data).map([key, value] => {
					
						return {key: value}
					})
				}
			)
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
							: false
					)
			)
		return decripted_res || res

	}
	catch(rej){

		alert(rej)
		console.error(rej)
	}
}
