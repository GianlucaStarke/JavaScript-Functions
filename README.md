# JavaScript-Fetch-and-FormData
functions for creating a FormData and accomplish a Fetch.

Functions for creating a FormData and a Fetch in JavaScript.

Example of usage:

    fetchPost('file.php', json, criarFormData(
        new FormData(form),
        {'item1': 'item1'},
        {'item2': 'item2'}
    ))
    .then(res => {

        some code...
    })
    .catch(rej => {

        alert(rej)
        console.error(rej)
    })
