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
			body: criarFormData(
				form ? new FormData(form) : new FormData(),
				data
			)
		})
		if(!res.ok){

			throw new Error(`HTTP ERROR: ${res.status}`)
		}

	}
	catch(rej){

		alert(rej)
		console.error(rej)
	}
}
