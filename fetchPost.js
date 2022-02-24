async function fetchPost(url, type, formData){

	const res = await fetch(url, {

		method: 'POST',
		body: formData
	})
	if(!res.ok){
		
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	return await res.type()
}
