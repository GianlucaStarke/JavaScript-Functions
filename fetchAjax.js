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
		const decrypted_res =
			!dataType
				? false
				:(
					dataType == 'json'
						? await res.json()
						: (
							dataType == 'blob'
								? await res.blob()
								: (
									dataType == 'text'
										? await res.text()
										: throw new Error(`Data type ${dataType} couldn't be decrypted`)
								)
						)
				)
		return decrypted_res || res.json() || res.blob() || res.text() || function(){throw new Error('Data type not found')}

	}
	catch(rej){

		return rej
	}
}
